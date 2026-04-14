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
    "bg-[rgba(255,43,68,1)] text-white shadow-[0_4px_14px_rgba(0,0,0,0.26)] hover:-translate-y-0.5 hover:bg-[var(--bbi-red-hover)] hover:shadow-[0_10px_22px_rgba(255,43,68,0.33)] focus-visible:outline-[rgba(255,43,68,1)]",
  ghost:
    "border border-[rgba(255,43,68,0.98)] text-[rgba(255,43,68,0.98)] shadow-[inset_0_0_0_1px_rgba(255,43,68,0.1)] hover:-translate-y-0.5 hover:bg-[rgba(255,43,68,0.1)] hover:shadow-[0_8px_18px_rgba(255,43,68,0.2)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClassName = `inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] transition-all duration-300 ease-out ${variantClasses[variant]} ${className}`;

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
