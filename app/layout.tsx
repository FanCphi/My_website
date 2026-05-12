import type { Metadata, Viewport } from "next";
import {
  Poppins,
  Lora,
  Noto_Serif_SC,
  Noto_Sans_SC,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-en",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-cn",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-cn",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F5",
};

export const metadata: Metadata = {
  title: {
    default: "Mr.Green — Let idea free",
    template: "%s | Mr.Green",
  },
  description:
    "Mr.Green 的个人网站 — 自由探索者，关注产品思维、AI 时代、区块链安全与数字人文。",
  keywords: [
    "Mr.Green",
    "个人网站",
    "产品思维",
    "AI",
    "区块链安全",
    "数字人文",
    "自由探索者",
  ],
  authors: [{ name: "Mr.Green" }],
  creator: "Mr.Green",
  metadataBase: new URL("https://mr-green.dev"),
  openGraph: {
    title: "Mr.Green — Let idea free",
    description:
      "自由探索者的个人网站 — 关注产品思维、AI 时代、区块链安全与数字人文。",
    type: "website",
    locale: "zh_CN",
    siteName: "Mr.Green",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr.Green — Let idea free",
    description:
      "自由探索者的个人网站 — 关注产品思维、AI 时代、区块链安全与数字人文。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${lora.variable} ${notoSerifSC.variable} ${notoSansSC.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
