import React from 'react';

const Intro = () => {
  return (
    <section className="mb-10 rounded-xl bg-[#f7df1e]/30 dark:bg-[#f7df1e]/10 p-6 md:p-8">
      <h1 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">
        👋 Welcome to HJS Blog
      </h1>
      <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-base md:text-lg">
        안녕하세요! <span className="font-semibold">저</span>의 개발 공부 기록 블로그입니다. <br />
        매일 <span className="text-yellow-700 dark:text-yellow-400 font-semibold">조금씩 성장</span>하고,
        <span className="text-yellow-700 dark:text-yellow-400 font-semibold"> 꾸준히 기록</span>합니다. <br />
        함께 배우고 나누는 공간이 되었으면 좋겠어요!
      </p>
    </section>
  );
};

export default Intro;
