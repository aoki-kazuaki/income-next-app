import Container from "@/components/molecules/Container";
import AppDialog from "@/components/organisms/App/Dialog";
import AppFooter from "@/components/organisms/App/Footer";
import AppHeader from "@/components/organisms/App/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "レシート管理アプリ",
  description: "Next.jsポートフォリオ。from aoki-kazuaki"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx("flex min-h-screen flex-col antialiased", geistSans, geistMono.variable)}>
        <AppHeader />
        <Container className="min-h[calc(100vh-1.75rem)] lg:min-h[calc(100vh-3rem)] flex-1 py-8">{children}</Container>
        <AppFooter />
        <AppDialog />
      </body>
    </html>
  );
}
