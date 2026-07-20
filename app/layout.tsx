import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "沙懷雪茄館旗艦店｜Savoy Cigar Flagship · Kaohsiung",
  description: "沙懷雪茄館旗艦店｜Savoy Cigar Flagship in Kaohsiung. A refined cigar tasting lounge at No. 17, Xintian Rd., Xinxing District. Daily 13:30–02:30.",
  keywords: ["沙懷雪茄館", "沙懷雪茄館旗艦店", "高雄雪茄館", "高雄雪茄品鑑", "高雄雪茄空間", "Savoy Cigar", "Kaohsiung cigar lounge", "Kaohsiung cigar tasting"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "沙懷雪茄館旗艦店｜Savoy Cigar Flagship · Kaohsiung",
    description: "A refined cigar tasting lounge in Kaohsiung, Taiwan.",
    type: "website",
    locale: "zh_TW",
    images: [{ url: "/savoy-storefront.jpeg", width: 1536, height: 864, alt: "沙懷雪茄館旗艦店門面" }],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
