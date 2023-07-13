export function dateToResource(date: string) {
  return date.split('-').reverse().join('/');
}
