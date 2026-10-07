"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Entry = { name: string; zips: string[]; zipCount: number; guide?: string };

// Filterable list of covered cities on a state page. Data is passed as compact props; a city's
// ZIP details render only when it's opened, which keeps large states (CA, TX, FL) light.
// Cities with a full guide link to it directly so the link is always in the HTML.
export function CityDirectory({ state, cities, requestHref }: { state: string; cities: Entry[]; requestHref: string }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const sorted = useMemo(() => [...cities].sort((a, b) => a.name.localeCompare(b.name)), [cities]);
  const t = q.trim().toLowerCase();
  const shown = t ? sorted.filter((c) => c.name.toLowerCase().includes(t)) : sorted;
  return (
    <div>
      {cities.length > 12 && (
        <div className="max-w-sm">
          <label htmlFor="city-filter" className="field-label">
            Find your city in {state}
          </label>
          <input id="city-filter" className="field" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Start typing a city name" />
        </div>
      )}
      <ul className="mt-5 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((c) => (
          <li key={c.name} className="min-w-0">
            {c.guide ? (
              <Link href={c.guide} className="link block py-1 font-semibold">
                {c.name} <span className="font-normal text-muted">· full guide</span>
              </Link>
            ) : (
              <button type="button" onClick={() => setOpen(open === c.name ? null : c.name)} aria-expanded={open === c.name} className="block w-full py-1 text-left">
                <span className="font-medium text-ink">{c.name}</span>{" "}
                <span className="text-sm text-muted">
                  · {c.zipCount} ZIP{c.zipCount === 1 ? "" : "s"}
                </span>
              </button>
            )}
            {open === c.name && (
              <div className="mb-2 rounded-lg bg-white p-3 text-sm ring-1 ring-line">
                <p className="break-words text-muted">
                  {c.zips.join(", ")}
                  {c.zipCount > c.zips.length && ` +${c.zipCount - c.zips.length} more`}
                </p>
                <a href={`${requestHref}?zip=${c.zips[0]}`} className="link mt-2 inline-block" rel="nofollow">
                  Request service in {c.name}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="mt-4 text-muted">No match in this list. Check your exact ZIP with the ZIP checker; we may still cover it.</p>}
    </div>
  );
}
