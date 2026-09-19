import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/15 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100",
        outline:
          "border bg-[var(--input-bg)] hover:bg-[var(--nav-item-hover-bg)]",
        ghost: "hover:bg-[var(--nav-item-hover-bg)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const themeStyles: React.CSSProperties =
    variant === "outline"
      ? {
          borderColor: "var(--input-border)",
          color: "var(--text-muted)",
          boxShadow: "var(--glass-shadow)",
          ...style,
        }
      : variant === "ghost"
      ? {
          color: "var(--text-muted)",
          ...style,
        }
      : {
          boxShadow: `0 4px 12px var(--btn-primary-shadow)`,
          ...style,
        };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={themeStyles}
      {...props}
    />
  );
}

export { Button, buttonVariants };
