"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function getIsHome(path: string) {
  return path === "/" || /^\/(ru|en|uz)\/?$/.test(path);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const isHome = getIsHome(pathname);
    const root = document.documentElement;
    if (isHome) {
      root.classList.add("theme-light");
      root.classList.remove("theme-dark");
    } else {
      root.classList.add("theme-dark");
      root.classList.remove("theme-light");
    }
  }, [pathname]);

  return <>{children}</>;
}
