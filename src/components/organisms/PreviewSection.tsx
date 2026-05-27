import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import SectionMoreButton from "@/components/common/SectionMoreButton";

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
        <section>
        <div className="flex items-center justify-between mb-4">
            <Title level={2} className="text-zinc-900 dark:text-zinc-100">
            {title}
            </Title>
            {moreButton && (
            <SectionMoreButton href={moreButton.href} label={moreButton.label} />
            )}
        </div>
        {context && (
            <Text color="secondary" size="sm" className="mb-4 whitespace-pre-line">
            {context}
            </Text>
        )}
        {children}
        </section>
    );
}
