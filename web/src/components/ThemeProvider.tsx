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
    const isAbout = pathname.includes("/about");
    const root = document.documentElement;
    if (isHome) {
      root.classList.add("theme-light");
      root.classList.remove("theme-dark");
      root.classList.remove("page-about");
    } else {
      root.classList.add("theme-dark");
      root.classList.remove("theme-light");
      if (isAbout) {
        root.classList.add("page-about");
      } else {
        root.classList.remove("page-about");
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
