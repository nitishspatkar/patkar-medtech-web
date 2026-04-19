import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patkar Digital Labs — Medical Digital Solutions",
  description:
    "Custom digital solutions for Swiss medical practices, built by clinicians and engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-pdl-bg font-sans text-base leading-[1.7] text-pdl-text">
        {children}
      </body>
    </html>
  );
}
