import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/60",
        className
      )}
      {...props}
    />
  );
}
