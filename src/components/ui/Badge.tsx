interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 ${className}`}
    >
      {label}
    </span>
  );
}
