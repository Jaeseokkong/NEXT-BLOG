interface SectionTitleProps {
    icon: string;
    title: string;
}

export function SectionTitle({ icon, title }: SectionTitleProps) {
    return (
      <h2 className="text-3xl font-bold flex items-center gap-3 border-b pb-2">
        {icon} {title}
      </h2>
    );
}