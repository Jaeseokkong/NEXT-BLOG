export function formatDate(dateString: string): string {
  const d = new Date(
    dateString.slice(0, 4) +
      '-' +
      dateString.slice(4, 6) +
      '-' +
      dateString.slice(6)
  );
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}