import Link from "next/link";
import PreviewTitle from "../atoms/PreviewTitle";
import PreviewContext from "../atoms/PreviewContext";
import PreviewMoreButton from "../atoms/PreviewMoreButton";

interface PreviewSectionProps {
  title: string;
  context?: string;
  moreButton?: {
    href: string;
    label?: string;
  };
  children: React.ReactNode;
}

export default function PreviewSection({
  title,
  context,
  moreButton,
  children,
}: PreviewSectionProps) {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow-sm">
      <PreviewTitle title={title} />
      {context && <PreviewContext context={context} />}
      {children}
      {moreButton && <PreviewMoreButton href={moreButton.href} label={moreButton.label} />}
    </section>
  );
}
