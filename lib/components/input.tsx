import * as React from "react";

import { cn } from "../utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[48px] w-full text-black leading-5 text-[14px] font-normal rounded-lg border border-solid border-[#E8E9EB] bg-white pl-4 pr-3 py-3 text-sm placeholder:text-[#C7CBD1] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-[#F7F8FA]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
