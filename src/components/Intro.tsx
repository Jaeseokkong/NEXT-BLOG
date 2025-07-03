import React from 'react';

const Intro = () => {
  return (
   <section className="rounded-xl bg-[#f7df1e]/30 dark:bg-[#f7df1e]/10 p-6 md:p-8">
      <h1 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">
        👋 Welcome to HJS Blog
      </h1>
      <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-base md:text-lg">
        안녕하세요! 프론트엔드 개발자 <span className="font-semibold text-yellow-700 dark:text-yellow-400">한재석</span>입니다. <br />
        이 블로그는 개발 과정에서의 배움과 경험을 <span className="font-semibold text-yellow-700 dark:text-yellow-400">기록하고 공유</span>하는 공간입니다. <br />
        작은 성장이라도 <span className="font-semibold text-yellow-700 dark:text-yellow-400">꾸준히</span>, 그리고 <span className="font-semibold text-yellow-700 dark:text-yellow-400">진심을 담아</span> 나아가겠습니다. <br />
        방문해 주셔서 감사합니다 🙏
      </p>
    </section>
  );
};

export default Intro;
