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
  default:
    "bg-blue-500/10 text-blue-400",

  success:
    "bg-emerald-500/10 text-emerald-400",

  warning:
    "bg-yellow-500/10 text-yellow-400",

  info:
    "bg-cyan-500/10 text-cyan-400",

  outline:
    "border border-white/10 bg-transparent text-slate-300",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}