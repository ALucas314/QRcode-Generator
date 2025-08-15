export const METRICS_LOCAL_KEY = "qr_generated_count";
export const BASELINE_DISPLAY = 0;
const RESET_FLAG_KEY = "qr_count_reset_v1";
const DEFAULT_TOTAL_ENDPOINT = "http://localhost:4000/metrics/total";
const DEFAULT_INCREMENT_ENDPOINT = "http://localhost:4000/metrics/increment";

export function getGeneratedCount(): number {
  try {
    // One-time reset to start from zero for all users
    if (!localStorage.getItem(RESET_FLAG_KEY)) {
      localStorage.setItem(METRICS_LOCAL_KEY, "0");
      localStorage.setItem(RESET_FLAG_KEY, "1");
      return 0;
    }
    const value = localStorage.getItem(METRICS_LOCAL_KEY);
    return value ? Math.max(0, parseInt(value, 10) || 0) : 0;
  } catch {
    return 0;
  }
}

export function incrementGeneratedCount(by: number = 1): void {
  try {
    const current = getGeneratedCount();
    const next = current + by;
    localStorage.setItem(METRICS_LOCAL_KEY, String(next));
  } catch {}

  // Optional: send to external metrics increment endpoint if configured
  const incrementEndpoint = (import.meta as any).env?.VITE_METRICS_INCREMENT_ENDPOINT as string | undefined;
  const endpointToUse = incrementEndpoint || DEFAULT_INCREMENT_ENDPOINT;
  try {
    fetch(endpointToUse, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ increment: by, ts: Date.now() }),
      keepalive: true,
    }).catch(() => {});
  } catch {}

  // Notify listeners in the app
  try {
    window.dispatchEvent(new CustomEvent("qr_generated"));
  } catch {}
}

export function formatCompactNumber(value: number): string {
  try {
    return new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(value);
  } catch {
    if (value >= 1000000) return `${Math.round(value / 100000) / 10}M`;
    if (value >= 1000) return `${Math.round(value / 100) / 10}k`;
    return String(value);
  }
}

export function formatNumber(value: number): string {
  try {
    return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value);
  } catch {
    return String(Math.floor(value));
  }
}

export async function fetchServerCount(): Promise<number | null> {
  const endpoint = (import.meta as any).env?.VITE_METRICS_TOTAL_ENDPOINT as string | undefined;
  const url = endpoint || DEFAULT_TOTAL_ENDPOINT;
  try {
    const res = await fetch(url, { method: "GET", credentials: "omit" });
    if (!res.ok) return null;
    const data = await res.json().catch(() => null);
    const total = typeof data?.total === "number" ? data.total : parseInt(String(data?.total || ""), 10);
    if (Number.isFinite(total) && total >= 0) {
      return total;
    }
    return null;
  } catch {
    return null;
  }
}


