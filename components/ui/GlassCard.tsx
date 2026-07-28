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
        "bg-white/5 backdrop-blur-xl border-white/10 shadow-xl",
        className
      )}
    >
      {children}
    </Card>
  );
}