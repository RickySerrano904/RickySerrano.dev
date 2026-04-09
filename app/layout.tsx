import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import FloatingNav from "./components/FloatingNav";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "A minimal portfolio with selected work, writing, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased text-[color:var(--fg)]">
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
