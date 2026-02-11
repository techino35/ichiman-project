import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "転生メーカー | 異世界に転生したら何者になる？",
  description:
    "あなたのプロフィールからAIが異世界転生後のステータスを診断！RPG風ステータスカード生成。チートスキル、二つ名、種族、レア度まで判明。無料で今すぐ診断。",
  keywords: [
    "異世界転生",
    "診断",
    "RPG",
    "ステータス",
    "チートスキル",
    "転生メーカー",
    "AI診断",
    "なろう",
    "異世界",
  ],
  openGraph: {
    title: "転生メーカー | 異世界に転生したら何者になる？",
    description:
      "AIがあなたの異世界転生ステータスを診断。チートスキル・二つ名・種族・レア度が判明する。",
    type: "website",
    locale: "ja_JP",
    siteName: "転生メーカー",
  },
  twitter: {
    card: "summary_large_image",
    title: "転生メーカー | 異世界転生ステータス診断",
    description:
      "AIがあなたの異世界転生ステータスを診断。チートスキル・二つ名・種族・レア度が判明。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "転生メーカー",
              description:
                "AIが異世界転生ステータスを診断するWebアプリ",
              url: "https://tensei-maker-tensei-maker-team.vercel.app",
              applicationCategory: "Entertainment",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
            }),
          }}
        />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
