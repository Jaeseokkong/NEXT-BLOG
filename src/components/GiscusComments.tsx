'use client';

import { useTheme } from 'next-themes';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'

function GiscusComments() {
  const { resolvedTheme } = useTheme();
 

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
      data-theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      data-lang="ko"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  )
}

export default GiscusComments