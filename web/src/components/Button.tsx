"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--bbi-red)] text-white hover:bg-[var(--bbi-red-hover)] focus-visible:outline-[var(--bbi-red)]",
  ghost:
    "border border-[color:var(--bbi-border)] text-[var(--bbi-text)] hover:border-[color:var(--bbi-border)] hover:bg-[var(--bbi-ghost-hover)]",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition ${variantClasses[variant]}`;

  const isAnchor = href?.startsWith("#");

  if (href && isAnchor) {
    const scrollToAnchor = () => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
      <button type="button" onClick={scrollToAnchor} className={className}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
