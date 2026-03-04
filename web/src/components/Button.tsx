import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#ff2b44] text-[#eeeeee] hover:bg-[#ff4960] focus-visible:outline-[#ff2b44]",
  ghost:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
