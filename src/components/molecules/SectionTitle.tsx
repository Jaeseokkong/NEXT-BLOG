import Title from "../atoms/Title";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Title level={2} className="border-b border-gray-200 pb-1">
      {children}
    </Title>
  );
}