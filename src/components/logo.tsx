import type { ComponentProps } from "react";

import { appName } from "@/lib/app";
import { cn } from "@/lib/utils";

type LogoProps = Omit<ComponentProps<"span">, "children">;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <span
      className={cn(
        "text-foreground inline-flex shrink-0 items-center gap-2 text-xl font-bold tracking-tighter whitespace-nowrap md:text-lg",
        className,
      )}
      {...props}
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-[1.2em] shrink-0"
      >
        <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM8 9V11H16V9H8ZM8 13V15H16V13H8Z"></path>
      </svg>
      {appName}
    </span>
  );
}
