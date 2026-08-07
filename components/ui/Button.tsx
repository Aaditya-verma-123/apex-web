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
    `
      bg-[var(--primary)]
      text-white
      hover:bg-[var(--primary-hover)]
      shadow-[0_0_30px_var(--glow)]
    `,

  secondary:
    `
      bg-white/10
      text-white
      border
      border-white/10
      hover:border-[var(--border)]
      hover:bg-white/15
    `,

  outline:
    `
      border
      border-[var(--border)]
      bg-transparent
      text-[var(--primary)]
      hover:bg-[color:var(--glow)]
    `,

  ghost:
    `
      bg-transparent
      text-slate-300
      hover:bg-white/10
      hover:text-[var(--primary)]
    `,
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
        `
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-semibold
        transition-all
        duration-300

        focus:outline-none
        focus:ring-2
        focus:ring-[var(--border)]

        disabled:pointer-events-none
        disabled:opacity-50

        active:scale-95
        `,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}