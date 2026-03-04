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
    <html lang="ru">
      <body className="bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
