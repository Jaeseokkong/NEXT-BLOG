export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      {/* --- Sidebar --- */}
      <aside className="hidden md:block w-64 space-y-4">
        <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"
          />
        ))}
      </aside>

      {/* --- Main --- */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Intro */}
        <div className="space-y-3">
          <div className="h-8 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        </div>

        {/* MobileCategoryTabs */}
        <div className="flex space-x-2 md:hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 bg-zinc-200 dark:bg-zinc-700 rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* SearchInput */}
        <div className="h-10 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />

        {/* PostList → 카드 모양 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg space-y-3 animate-pulse"
            >
              <div className="h-32 w-full bg-zinc-200 dark:bg-zinc-700 rounded" /> {/* 썸네일 */}
              <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded" /> {/* 제목 */}
              <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded" /> {/* 설명 */}
              <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded" /> {/* 태그 */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
