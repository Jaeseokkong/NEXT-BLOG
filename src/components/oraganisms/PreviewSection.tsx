import Link from "next/link";

interface PreviewSectionProps {
  title: string;
  content?: string;
  moreButton?: {
    href: string;
    label?: string;
  };
  children: React.ReactNode;
}

export default function PreviewSection({
  title,
  content,
  moreButton,
  children,
}: PreviewSectionProps) {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>

      {content && (
        <p className="text-zinc-700 dark:text-zinc-300 mb-3 whitespace-pre-line">
          {content}
        </p>
      )}

      {children}

      {moreButton && (
        <div className="mt-6">
          <Link
            href={moreButton.href}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
              bg-gradient-to-r from-indigo-400 to-indigo-600 text-white
              hover:from-indigo-500 hover:to-indigo-700
              dark:from-indigo-500 dark:to-indigo-700 dark:hover:from-indigo-600 dark:hover:to-indigo-800
              shadow-sm hover:shadow-md transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span>{moreButton.label || "더 알아보기"}</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
