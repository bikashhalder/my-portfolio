import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Bikash Halder",
  description: "Hey, I am a frontend developer from India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
