import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { MSWComponent } from "./_component/MSWConponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z",
  description: "X.com 클론코딩",
};

type Props = { children: ReactNode };
export default function RootLayout({
  // 최상위 폴더
  children,
}: Props) {
  return (
    <html lang="ko">
      {/* 여기에 레이아웃(인터랙션이 있어도 안바뀌는 부분)을 넣어주면 됨 */}
      <body className={inter.className}>
        {children}
        <MSWComponent />
      </body>
    </html>
  );
}
