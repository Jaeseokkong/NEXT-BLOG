'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setLoading(true);

      const timeout = setTimeout(() => {
        setLoading(false);
        setPrevPath(pathname);
      }, 300); // 최소 로딩 시간

      return () => clearTimeout(timeout);
    }
  }, [pathname, prevPath]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-sm z-[9999]">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-12 h-12 border-4 border-zinc-300 dark:border-zinc-600 border-t-indigo-500 dark:border-t-indigo-400 rounded-full animate-spin"></div>
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
          Loading...
        </span>
      </div>
    </div>
  );
}