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
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}