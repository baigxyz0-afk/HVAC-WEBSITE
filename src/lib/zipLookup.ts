// Client helper for the ZIP coverage API.
export type ZipResult = { ok: boolean; city?: string; state?: string };

const cache = new Map<string, Promise<ZipResult>>();

export function lookupZip(zip: string): Promise<ZipResult> {
  if (!cache.has(zip)) {
    cache.set(zip, fetch(`/api/zip/?zip=${zip}`).then((r) => r.json()).catch(() => ({ ok: false })));
  }
  return cache.get(zip)!;
}
