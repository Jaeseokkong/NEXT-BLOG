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


export default function PreviewSection({ title, content, moreButton, children }: PreviewSectionProps) {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">{title}</h2>
      {content && 
        <p className="text-zinc-700 dark:text-zinc-300 mb-3 whitespace-pre-line">
          {content}
        </p> 
      }
      {children}
      <div className="mt-4">
      {moreButton && (
        <div className="mt-4">
          <Link
            href={moreButton.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition"
          >
            {moreButton.label || "→ 더 알아보기"}
          </Link>
        </div>
      )}
      </div>
    </section>
  )
}