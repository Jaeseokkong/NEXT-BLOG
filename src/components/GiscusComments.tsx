'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

function GiscusComments() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (resolvedTheme === 'dark') setTheme('dark');
    else setTheme('light');
  }, [resolvedTheme]);
 

  return (
    <div className="giscus max-w-4xl mx-auto px-4">
      <Giscus
        id="comments"
        repo="Jaeseokkong/BLOG-COMMENTS"
        repoId="R_kgDOPSpQbg"
        category="General"
        categoryId="DIC_kwDOPSpQbs4CtZ8u"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}

export default GiscusComments