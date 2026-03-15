export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">

      <div className="flex-1 flex flex-col gap-6">
        <div className="h-10 w-40 bg-zinc-200 dark:bg-zinc-700 rounded-lg animate-pulse" />

        <div className="h-10 w-full bg-zinc-200 dark:bg-zinc-700 rounded-lg animate-pulse shadow-sm" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm space-y-3"
            >
              <div className="h-40 w-full bg-zinc-200 dark:bg-zinc-700 rounded-lg animate-pulse" />
              <div className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              </div>
              <div className="h-4 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
