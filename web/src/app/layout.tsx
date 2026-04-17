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
      </head>
      <body className="flex min-h-[100dvh] min-h-screen flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
