import * as React from "react";

import { cn } from "~/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/30 focus:border-primary/50 focus:bg-white/8 focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50 resize-none leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
