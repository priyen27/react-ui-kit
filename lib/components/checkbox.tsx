import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "../utils";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  iconClassName?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, iconClassName, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group peer h-6 w-6 shrink-0 rounded-[5px] border border-[#9B9EA3] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0073E6] data-[state=checked]:text-[#FFF] data-[state=checked]:border-none data-[state=indeterminate]:bg-[#0073E6] data-[state=indeterminate]:text-[#FFF] data-[state=indeterminate]:border-none",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check
        className={`h-5 w-5 hidden group-data-[state=checked]:block ${iconClassName}`}
      />
      <Minus
        className={`h-5 w-5 hidden group-data-[state=indeterminate]:block ${iconClassName}`}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
