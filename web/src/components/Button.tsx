import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-red-500 text-white hover:bg-red-400 focus-visible:outline-red-300",
  ghost:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
