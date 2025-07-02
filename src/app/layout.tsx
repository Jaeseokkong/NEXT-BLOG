import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat } from 'next/font/google';
import Header from "@/components/layout/Header";
import { Providers } from './providers';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "개발 블로그 | TIL & 기술 기록",
  description: "Next.js 기반 개발 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${inter.className} ${montserrat.className}`}>
      <body className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 transition-colors">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
