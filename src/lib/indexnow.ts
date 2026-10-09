import fs from "fs";
import path from "path";

export const DEFAULT_INDEXNOW_KEY = "e4c3b2a19876543210fedcbaabcdef01";

export interface IndexNowOptions {
  host?: string;
  key?: string;
  keyLocation?: string;
  urls?: string[];
  force?: boolean;
  endpoint?: string;
}

export interface SubmissionResult {
  endpoint: string;
  status: number;
  statusText: string;
  submittedCount: number;
  skippedCount: number;
  urls: string[];
  success: boolean;
  message: string;
}

const PRIMARY_ENDPOINT = "https://api.indexnow.org/indexnow";
const BING_ENDPOINT = "https://www.bing.com/indexnow";

const CACHE_FILE = path.join(process.cwd(), ".indexnow-cache.json");

function loadCache(): Record<string, string> {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    }
  } catch {
    // ignore corrupted cache
  }
  return {};
}

function saveCache(cache: Record<string, string>) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write IndexNow cache:", err);
  }
}

/**
 * Submits an array of URLs to the IndexNow protocol with batching, deduplication, retry, and history tracking.
 */
export async function submitUrlsToIndexNow(options: IndexNowOptions = {}): Promise<SubmissionResult[]> {
  const host = (options.host || process.env.NEXT_PUBLIC_SITE_URL || "https://aspenridgeair.com")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  const siteUrl = `https://${host}`;
  const key = options.key || process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
  const keyLocation = options.keyLocation || `${siteUrl}/${key}.txt`;

  let inputUrls = options.urls || [];
  if (inputUrls.length === 0) {
    throw new Error("No URLs provided to IndexNow.");
  }

  // Normalize URLs to fully-qualified HTTPS URLs on this host
  const normalizedUrls = [...new Set(
    inputUrls.map((u) => {
      if (u.startsWith("http://") || u.startsWith("https://")) {
        return u;
      }
      return `${siteUrl}${u.startsWith("/") ? "" : "/"}${u}`;
    })
  )].filter((u) => {
    try {
      const parsed = new URL(u);
      return parsed.host === host;
    } catch {
      return false;
    }
  });

  const cache = loadCache();
  const nowIso = new Date().toISOString();

  // Filter out recently submitted URLs unless force is enabled
  const urlsToSubmit = options.force
    ? normalizedUrls
    : normalizedUrls.filter((u) => !cache[u]);

  const skippedCount = normalizedUrls.length - urlsToSubmit.length;

  if (urlsToSubmit.length === 0) {
    return [
      {
        endpoint: PRIMARY_ENDPOINT,
        status: 200,
        statusText: "OK",
        submittedCount: 0,
        skippedCount,
        urls: [],
        success: true,
        message: `All ${normalizedUrls.length} URLs were previously submitted. Pass force=true to resubmit.`,
      },
    ];
  }

  // IndexNow allows up to 10,000 URLs per batch; we safely chunk in batches of 250
  const BATCH_SIZE = 250;
  const batches: string[][] = [];
  for (let i = 0; i < urlsToSubmit.length; i += BATCH_SIZE) {
    batches.push(urlsToSubmit.slice(i, i + BATCH_SIZE));
  }

  const results: SubmissionResult[] = [];
  const endpoints = options.endpoint ? [options.endpoint] : [PRIMARY_ENDPOINT, BING_ENDPOINT];

  for (const endpoint of endpoints) {
    for (const batch of batches) {
      const payload = {
        host,
        key,
        keyLocation,
        urlList: batch,
      };

      let attempt = 0;
      let response: Response | null = null;
      let lastError: Error | null = null;

      // Exponential backoff retry loop (up to 3 attempts)
      while (attempt < 3) {
        try {
          attempt++;
          response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "User-Agent": "Aspenridge-IndexNow-Client/1.0",
            },
            body: JSON.stringify(payload),
          });

          // If rate-limited (429) or server error (5xx), wait and retry
          if (response.status === 429 || (response.status >= 500 && response.status < 600)) {
            const delay = attempt * 1500;
            console.warn(`IndexNow ${endpoint} returned HTTP ${response.status}. Retrying in ${delay}ms...`);
            await new Promise((r) => setTimeout(r, delay));
            continue;
          }

          break;
        } catch (err: unknown) {
          lastError = err instanceof Error ? err : new Error(String(err));
          const delay = attempt * 1000;
          await new Promise((r) => setTimeout(r, delay));
        }
      }

      if (!response) {
        results.push({
          endpoint,
          status: 0,
          statusText: "Network Error",
          submittedCount: 0,
          skippedCount,
          urls: batch,
          success: false,
          message: `Network request failed after 3 attempts: ${lastError?.message}`,
        });
        continue;
      }

      const success = response.status === 200 || response.status === 202;
      let message = "";
      switch (response.status) {
        case 200:
          message = "URLs successfully submitted and verified.";
          break;
        case 202:
          message = "URLs accepted; IndexNow key validation pending.";
          break;
        case 400:
          message = "Invalid format or payload.";
          break;
        case 403:
          message = "Key invalid or not found at declared keyLocation.";
          break;
        case 422:
          message = "URLs do not match declared host.";
          break;
        case 429:
          message = "Rate limit exceeded (too many requests).";
          break;
        default:
          message = `HTTP status ${response.status}: ${response.statusText}`;
      }

      if (success) {
        for (const u of batch) {
          cache[u] = nowIso;
        }
        saveCache(cache);
      }

      results.push({
        endpoint,
        status: response.status,
        statusText: response.statusText,
        submittedCount: success ? batch.length : 0,
        skippedCount,
        urls: batch,
        success,
        message,
      });
    }

    // If primary endpoint succeeded, we don't necessarily have to hit secondary Bing endpoint unless specifically requested
    if (results.some((r) => r.success && r.endpoint === PRIMARY_ENDPOINT)) {
      break;
    }
  }

  return results;
}
