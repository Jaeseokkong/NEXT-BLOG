import PreviewMoreButton from "../atoms/PreviewMoreButton";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

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
      <Title level={2} className="mb-2 text-zinc-800 dark:text-zinc-100">
        {title}
      </Title>
      {context && 
        <Text as="p" className="text-zinc-700 dark:text-zinc-300 mb-3 whitespace-pre-line">
          {context}
        </Text>
      }
      {children}
      {moreButton && <PreviewMoreButton href={moreButton.href} label={moreButton.label} />}
    </section>
  );
}
