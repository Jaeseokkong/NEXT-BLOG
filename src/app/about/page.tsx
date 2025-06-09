export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">About HJS</h1>

      <section className="mb-8 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          안녕하세요! 👋 저는 <strong>HJS</strong>입니다. <br />
          프론트엔드 중심으로 개발을 공부하고 있고, 이 블로그는 저의 성장과정을 기록하기 위해 만들었습니다.
        </p>

        <p>
          매일 작은 것이라도 꾸준히 학습하고 기록하려 노력 중이며, 나중에 돌아봤을 때 스스로의 성장을 확인할 수 있도록 글을 남기고 있어요.
        </p>

        <p>
          관심 있는 분야는 <strong>React, TypeScript, Next.js, UI/UX</strong>이며, <br />
          최근에는 <strong>개발 생산성과 아키텍처</strong>에도 관심이 많습니다.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">📬 연락</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          블로그나 글에 대해 궁금한 점이 있다면 아래 이메일로 연락주세요:
          <br />
          <a
            href="mailto:your-email@example.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            your-email@example.com
          </a>
        </p>
      </section>
    </div>
  );
}
