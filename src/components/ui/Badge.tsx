import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSpring,
  SiSpringboot,
  SiOracle,
  SiMysql,
  SiLinux,
  SiChartdotjs,
  SiPhp,
  SiAmazonrds,
  SiHtml5,
  SiCss3,
  SiNodedotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact className="inline mr-1 text-sky-500" />,
  "Next.js": <SiNextdotjs className="inline mr-1 text-zinc-800 dark:text-zinc-200" />,
  TypeScript: <SiTypescript className="inline mr-1 text-blue-500" />,
  JavaScript: <SiJavascript className="inline mr-1 text-amber-400" />,
  Spring: <SiSpring className="inline mr-1 text-green-600" />,
  "Spring Boot": <SiSpringboot className="inline mr-1 text-green-500" />,
  Oracle: <SiOracle className="inline mr-1 text-red-600" />,
  MySQL: <SiMysql className="inline mr-1 text-sky-600" />,
  Linux: <SiLinux className="inline mr-1 text-orange-500" />,
  "Chart.js": <SiChartdotjs className="inline mr-1 text-pink-500" />,
  PHP: <SiPhp className="inline mr-1 text-indigo-500" />,
  "AWS RDS": <SiAmazonrds className="inline mr-1 text-blue-400" />,
  HTML: <SiHtml5 className="inline mr-1 text-orange-500" />,
  CSS: <SiCss3 className="inline mr-1 text-blue-500" />,
  Java: <FaJava className="inline mr-1 text-red-500" />,
  "React Native": <SiReact className="inline mr-1 text-sky-400" />,
  Node: <SiNodedotjs className="inline mr-1 text-green-600" />,
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
