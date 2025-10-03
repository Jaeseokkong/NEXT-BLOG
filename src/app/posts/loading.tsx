export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800 z-[9999] overflow-hidden">
      <div className="h-full w-1/3 bg-yellow-500 animate-loading-bar" />
    </div>
  );
}
