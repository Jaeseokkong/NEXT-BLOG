import { SiJavascript, SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact className="inline mr-1 text-sky-500" />,
  "Next.js": <SiNextdotjs className="inline mr-1 text-zinc-800 dark:text-zinc-200" />,
  TypeScript: <SiTypescript className="inline mr-1 text-blue-500" />,
  JavaScript: <SiJavascript className="inline mr-1 text-amber-400" />
};


interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  const Icon = techIcons[label];
  return (
    <span
      className={`px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 ${className}`}
    >
       {Icon}
       {label}
    </span>
  );
}
