export function formatPostDate(date?: string) {
  if (!date) return "Demonstration · not published";
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
