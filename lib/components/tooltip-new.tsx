import React from "react";
import {
  TooltipProvider,
  Tooltip as TooltipComponent,
  TooltipTrigger,
  TooltipContent,
} from "./tooltip";

interface TooltipProps {
  message: string;
  children: React.ReactNode;
  position: "top" | "bottom" | "left" | "right";
  className?: string;
  size: "small" | "medium" | "large";
}

const Tooltip = ({
  message = "",
  children,
  size = "medium",
  position = "top",
  className = "",
  ...rest
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipComponent>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={position}
          size={size}
          className={className}
          {...rest}
        >
          {message}
        </TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  );
};

export { Tooltip };
