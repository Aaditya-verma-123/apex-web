import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500",

  secondary:
    "bg-white/10 text-white hover:bg-white/20",

  outline:
    "border border-blue-500/40 bg-transparent text-blue-400 hover:bg-blue-500/10",

  ghost:
    "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
        "disabled:pointer-events-none disabled:opacity-50",
        "active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}