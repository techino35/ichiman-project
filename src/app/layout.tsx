import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "転生メーカー | 異世界に転生したら何者になる？",
  description:
    "あなたのプロフィールからAIが異世界転生後のステータスを診断！RPG風ステータスカード生成。チートスキル、二つ名、種族、全部わかる。",
  openGraph: {
    title: "転生メーカー | 異世界に転生したら何者になる？",
    description:
      "AIがあなたの異世界転生ステータスを診断。チートスキル・二つ名・種族が判明する。",
    type: "website",
    locale: "ja_JP",
    siteName: "転生メーカー",
  },
  twitter: {
    card: "summary_large_image",
    title: "転生メーカー | 異世界転生ステータス診断",
    description:
      "AIがあなたの異世界転生ステータスを診断。チートスキル・二つ名・種族が判明。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
