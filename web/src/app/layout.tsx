import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BBI — Brand Platform",
  description: "BBI (Bold Brands International) — operating partner for owners and CEOs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var root = document.documentElement;
                root.classList.remove('theme-light', 'theme-dark');
                root.classList.add('theme-dark');
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var root = document.documentElement;
                function applyZoomLock(){
                var baseW = 1300;
                var baseH = 780;
                  var scaleW = window.innerWidth / baseW;
                  var scaleH = window.innerHeight / baseH;
                  var scale = Math.min(scaleW, scaleH);
                  if (scale < 1.06) scale = 1.06;
                  if (scale > 1.8) scale = 1.8;
                  root.style.setProperty('--zoom-lock', String(scale));
                }
                applyZoomLock();
                window.addEventListener('resize', applyZoomLock, { passive: true });
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-[100dvh] min-h-screen flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
