export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6">
      {/* 사이드바 스켈레톤 */}
      <aside className="hidden md:block w-64 space-y-4">
        <div className="h-6 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        <div className="h-4 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
      </aside>

      {/* 메인 영역 스켈레톤 */}
      <div className="flex-1 flex flex-col gap-6">
        {/* 제목 */}
        <div className="h-8 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />

        {/* 카테고리 탭 */}
        <div className="flex space-x-3">
          <div className="h-8 w-20 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
          <div className="h-8 w-20 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
          <div className="h-8 w-20 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        </div>

        {/* 포스트 카드 스켈레톤 */}
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-6 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
