import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { connection } from "next/server";
import FloatingNav from "./components/Navbar";
import "./globals.css";

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
  title: "Ricky Serrano | Portfolio",
  description: "A minimal portfolio with selected work, writing, and contact.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connection();

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
