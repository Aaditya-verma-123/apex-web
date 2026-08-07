import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "info"
  | "outline";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variants = {
  default: `
    bg-[color:var(--glow)]
    text-[var(--primary)]
    border
    border-[var(--border)]
  `,

  success: `
    bg-emerald-500/10
    text-emerald-400
    border
    border-emerald-500/20
  `,

  warning: `
    bg-yellow-500/10
    text-yellow-400
    border
    border-yellow-500/20
  `,

  info: `
    bg-[color:var(--glow)]
    text-[var(--primary)]
    border
    border-[var(--border)]
  `,

  outline: `
    bg-transparent
    text-slate-300
    border
    border-white/10
    hover:border-[var(--border)]
    hover:text-[var(--primary)]
    transition-all
    duration-300
  `,
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        transition-all
        duration-300
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}