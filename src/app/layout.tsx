import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import "react-simple-toasts/dist/style.css";
import "react-simple-toasts/dist/theme/light.css";
import { CDN_URL } from "@/constants/url";


const suit = localFont({
  src: [
    {
      path: './font/SuitThin.woff2',
      weight: '100',
    },
    {
      path: './font/SuitExtraLight.woff2',
      weight: '200',
    },
    {
      path: './font/SuitLight.woff2',
      weight: '300',
    },
    {
      path: './font/SuitRegular.woff2',
      weight: '400',
    },
    {
      path: './font/SuitMedium.woff2',
      weight: '500',
    }
  ],
  display: 'swap',
  variable: '--font-suit',
});

const sometimesTimes = localFont({
  src: './font/SometimesTimesRegular.woff2',
  display: 'swap',
  variable: '--font-sometimes-times',
});

export const metadata: Metadata = {
  title: "현규 ❤️ 희진 결혼합니다.",
  description: "5월 25일(일) 오후 12시 | 헤이스가든",
  openGraph: {
    images: [CDN_URL + '/thumbnail.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suit.variable} ${sometimesTimes.variable}`}>
        {children}
        <div id="portal"></div>
      </body>
    </html>
  );
}
