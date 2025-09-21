/**
 * Format a Date into a readable string (default: en-US).
 * Example: "Jan 5, 2025"
 */
export function formatDate(date: Date | string, locale = "en-US") {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}
