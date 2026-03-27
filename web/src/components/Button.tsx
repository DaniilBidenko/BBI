"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[rgba(255,43,68,1)] text-white hover:opacity-95 focus-visible:outline-[rgba(255,43,68,1)]",
  ghost:
    "border border-[rgba(255,43,68,0.98)] text-[rgba(255,43,68,0.98)] hover:bg-[rgba(255,43,68,0.08)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClassName = `inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] transition ${variantClasses[variant]} ${className}`;

  const isAnchor = href?.startsWith("#");

  if (href && isAnchor) {
    const scrollToAnchor = () => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
      <button type="button" onClick={scrollToAnchor} className={baseClassName}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {children}
      </Link>
    );
  }

  return <button className={baseClassName}>{children}</button>;
}
