import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "info" | "warning" | "error";

interface BannerProps {
  variant?: Variant;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  info: "bg-blue-50 text-blue-900 border-blue-500",
  warning: "bg-amber-50 text-amber-900 border-amber-500",
  error: "bg-red-50 text-red-900 border-red-500",
};

export function Banner({ variant = "info", children }: BannerProps) {
  return (
    <div
      className={cn(
        "border-b px-4 py-3 text-center text-sm [&_a]:font-semibold [&_a]:text-inherit [&_a]:underline",
        variantClasses[variant],
      )}
      role={variant === "error" ? "alert" : "status"}
    >
      {children}
    </div>
  );
}
