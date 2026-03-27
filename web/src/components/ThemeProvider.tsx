"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-dark");
    root.classList.remove("theme-light");
    // Unified dark theme on all routes; page-specific background overrides are disabled.
    root.classList.remove("page-about");
  }, [pathname]);

  return <>{children}</>;
}
