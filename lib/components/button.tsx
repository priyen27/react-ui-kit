import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors ",
  {
    variants: {
      variant: {
        default:
          "bg-[#0073E6] text-white hover:bg-[#1A86F3] active:bg-[#006DDA] disabled:bg-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        secondary:
          "bg-[#FFF] text-[#000] hover:bg-[#E8E9EB] active:bg-[#9B9EA3] disabled:bg-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        outline:
          "border border-[#FFF]  text-[#FFF] hover:border-[#E8E9EB] active:border-[#9B9EA3] disabled:border-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        outline2:
          "border border-[#000] text-[#000] hover:border-[#4A4C52] active:border-[#000] disabled:border-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        link: "text-slate-900 underline-offset-4 hover:underline",
        destructive: "bg-[#DB0000] text-white hover:bg-red-500/90 ",
        ghost: "bg-transparent text-slate-900 hover:bg-slate-300",
      },
      size: {
        default: "min-w-[56px] px-3 py-2 h-9 rounded-lg text-sm",
        sm: "min-w-[56px] px-3 py-2 h-8 rounded-lg text-xs",
        lg: "min-w-[56px] px-6 py-3 h-12 rounded-lg text-base ",
        icon: "h-10 w-10 p-4 rounded-full text-lg flex flex-shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
