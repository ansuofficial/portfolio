import * as React from "react";

import { cn } from "~/lib/utils";

function Textarea({ className, style, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full rounded-lg border px-4 py-4 text-sm outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50 resize-none leading-relaxed",
        className
      )}
      style={{
        backgroundColor: "var(--input-bg)",
        borderColor: "var(--input-border)",
        color: "var(--text)",
        ...style,
      }}
      {...props}
    />
  );
}

export { Textarea };
