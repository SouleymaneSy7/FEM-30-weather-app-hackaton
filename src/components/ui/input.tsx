import * as React from "react";

import { cn } from "@/lib/utils";
import { InputProps } from "@/types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const Icon = icon;

    const id = React.useId();
    const searchId = `search-${id}`;

    return (
      <div className="w-full relative">
        {Icon && (
          <label
            id={searchId}
            className="absolute left-6 top-1/2 transform -translate-y-1/2"
          >
            <Icon size={20} className="text-neutral-200" />
          </label>
        )}

        <input
          type={type}
          id={searchId}
          className={cn(
            "flex h-[3.5rem] text-neutral-0 w-full rounded-12  bg-neutral-800  px-6 text-fs-preset-5 ring-offset-background file:border-0 file:bg-neutral-800 file:text-fs-preset-5 file:font-medium placeholder:text-neutral-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
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
