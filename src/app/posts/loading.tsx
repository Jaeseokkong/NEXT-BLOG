export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      {/* --- Sidebar (좌측) --- */}
      <aside className="hidden md:block w-[220px] shrink-0 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm h-fit space-y-4">
        <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"
          />
        ))}
      </aside>

      {/* --- 메인 컨텐츠 --- */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Intro Section */}
        <section className="rounded-2xl bg-indigo-100/40 dark:bg-indigo-300/10 p-6 md:p-8 shadow-sm border border-indigo-200 dark:border-indigo-400/20 space-y-4 animate-pulse">
          <div className="h-8 w-1/2 bg-indigo-200 dark:bg-indigo-400/30 rounded" />
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-indigo-200/60 dark:bg-indigo-400/20 rounded"
              />
            ))}
          </div>
        </section>

        {/* MobileCategoryTabs */}
        <div className="flex space-x-2 md:hidden overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 bg-zinc-200 dark:bg-zinc-700 rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* SearchInput */}
        <div className="h-10 w-full bg-zinc-200 dark:bg-zinc-700 rounded-lg animate-pulse shadow-sm" />

        {/* PostList → 카드 형태 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-sm space-y-3"
            >
              {/* 썸네일 */}
              <div className="h-40 w-full bg-zinc-200 dark:bg-zinc-700 rounded-lg animate-pulse" />
              {/* 제목 */}
              <div className="h-5 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              {/* 설명 */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              </div>
              {/* 태그 or 메타 정보 */}
              <div className="h-4 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
