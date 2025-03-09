import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nanumMyeongjo = localFont({
  src: './font/NanumMyeongjo.otf',
  display: 'swap',
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
      <body className={nanumMyeongjo.className}>
        {children}
      </body>
    </html>
  );
}
