export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-10 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded mb-6" />

      <div className="space-y-4">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded"
          />
        ))}
      </div>

      <div className="mt-10 h-20 bg-zinc-200 dark:bg-zinc-700 rounded" />
    </div>
  );
}
