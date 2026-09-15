import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "full";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1440px]",
    narrow: "max-w-5xl",
    full: "max-w-none px-0",
  };

  return (
    <div
      className={cn(
        "mx-auto px-6 lg:px-12 w-full",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
