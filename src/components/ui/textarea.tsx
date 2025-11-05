import * as React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded-md border border-black/10 bg-white text-black px-3 py-2 outline-none focus:ring-2 focus:ring-modera-gold ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
