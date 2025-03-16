import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


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
  description: "5월 25일 일요일  오후 12시",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bcb9c3eac6aa813db022f267e80b43cd&autoload=false" async></script>
      <body className={`${suit.variable} ${sometimesTimes.variable}`}>
        {children}
      </body>
    </html>
  );
}
