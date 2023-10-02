export function dateToResource(date: Date): string {
  console.log("date", date.toISOString().split("T")[0], date);
  return date.toISOString().split("T")[0];
}
