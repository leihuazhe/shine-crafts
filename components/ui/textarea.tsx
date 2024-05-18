import * as React from "react"

import { cn } from "@/lib/utils"
import { ttsBorderStyle } from "@/lib/border";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      // placeholder:text-muted-foreground
      <textarea
        className={cn(
          `whitespace-no-wrap flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm
           ring-offset-background
           ${ttsBorderStyle}
           focus-visible:outline-none
           focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
