import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

type StickerBadgeProps = ComponentProps<typeof Badge>;

export function StickerBadge({
  children,
  className,
  ...props
}: StickerBadgeProps) {
  return (
    <Badge
      variant="accent"
      className={cn(
        "border-foreground absolute -top-6 -right-4 h-8 -rotate-8 border-2 px-2 font-sans text-lg font-black tracking-tight md:-top-8 md:-right-6 md:h-10 md:px-4 md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </Badge>
  );
}
