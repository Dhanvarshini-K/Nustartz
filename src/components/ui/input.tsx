import * as React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex placeholder:text-muted-foreground focus-visible:outline-none bg-transparent h-[84px] text-xl w-full p-6 rounded-[10px] border-2 border-inputBorder text-Grey",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
