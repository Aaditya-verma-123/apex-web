import Card from "./Card";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <Card
      className={cn(
        `
        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        shadow-xl

        transition-all
        duration-300

        hover:border-[var(--border)]
        hover:shadow-[0_20px_60px_var(--glow)]
        `,
        className
      )}
    >
      {children}
    </Card>
  );
}