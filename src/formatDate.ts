export function padTo2Digits(num: number): string {
  return num.toString().padStart(2, '0');
}

export default function formatDate(date: string): string {
  const dateObject = new Date(date);
  return [
    padTo2Digits(dateObject.getDate()),
    padTo2Digits(dateObject.getMonth() + 1),
    dateObject.getFullYear(),
  ].join('/');
}
