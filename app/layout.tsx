import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/shared/styles";

import { OverlayContext } from "@/app/shared/context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LJH ToDoPage",
  description: "글로벌널리지 과제 전형",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OverlayContext>{children}</OverlayContext>
      </body>
    </html>
  );
}
