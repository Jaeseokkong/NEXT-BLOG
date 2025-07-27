'use client';

import { useTheme } from 'next-themes';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'

function GiscusComments() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 다크 모드 변경 시 Giscus에 메시지 전송
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame')
  
  }, [resolvedTheme])

  return (
    <Script
      src="https://giscus.app/client.js"
      data-repo="Jaeseokkong/BLOG-COMMENTS"
      data-repo-id="R_kgDOPSpQbg"
      data-category="General"
      data-category-id="DIC_kwDOPSpQbs4CtZ8u"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="preferred_color_scheme"
      data-lang="ko"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  )
}

export default GiscusComments