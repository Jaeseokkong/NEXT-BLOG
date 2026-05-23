interface BadgeProps {
  label?: string;
  variant?: 'default' | 'primary';
  className?: string;
}

export default function Badge({ label, variant = 'default', className = "" }: BadgeProps) {
  const variantStyles = {
    default: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700',
    primary: 'bg-white dark:bg-transparent text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-700',
  }

  return (
    <span className={`px-3 py-1 rounded-lg text-sm ${variantStyles[variant]} ${className}`}>
      {label}
    </span>
  );
}
