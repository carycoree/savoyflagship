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
  metadataBase: new URL("https://savoyflagship.carycoree.workers.dev"),
  title: {
    default: "沙懷雪茄館旗艦店｜高雄雪茄品鑑空間",
    template: "%s｜沙懷雪茄館旗艦店",
  },
  description:
    "沙懷雪茄館旗艦店位於高雄市新興區新田路17號，提供雪茄品鑑、酒類、特色調酒、餐飲與舒適交流空間，每日營業至凌晨02:30。",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "沙懷雪茄館旗艦店｜高雄雪茄品鑑空間",
    description:
      "位於高雄市新興區的雪茄品鑑與城市交流空間，提供酒類、特色調酒與餐飲服務。",
    url: "/",
    siteName: "沙懷雪茄館旗艦店",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/savoy-storefront.jpeg",
        alt: "沙懷雪茄館旗艦店高雄門市",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "沙懷雪茄館旗艦店｜高雄雪茄品鑑空間",
    description:
      "位於高雄市新興區的雪茄品鑑與城市交流空間，提供酒類、特色調酒與餐飲服務。",
    images: ["/savoy-storefront.jpeg"],
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
    <html lang="zh-Hant">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
