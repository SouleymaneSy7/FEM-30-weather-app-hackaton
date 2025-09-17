import * as React from "react";

import { cn } from "@/lib/utils";
import { InputProps } from "@/types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, containerWidth, ...props }, ref) => {
    const Icon = icon;

    return (
      <div className={`relative w-full ${containerWidth}`}>
        {Icon && (
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <Icon size={20} className="text-muted-foreground" />
          </div>
        )}

        <input
          type={type}
          className={cn(
            "flex h-[3.5rem] w-full h-14 rounded-12  bg-card px-6 text-fs-preset-5 ring-offset-background file:border-0 file:bg-card file:text-fs-preset-5 file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-15" : "",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
