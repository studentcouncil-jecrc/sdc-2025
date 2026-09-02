const CDN_URL = "https://square-band-987d.studentcouncil-4ec.workers.dev";

export function img(relativePath) {
  if (!relativePath) return "";

  return `${CDN_URL}/${relativePath}`;
}