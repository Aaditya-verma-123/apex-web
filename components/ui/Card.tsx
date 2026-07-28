import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40",
        className
      )}
    >
      {children}
    </div>
  );
}