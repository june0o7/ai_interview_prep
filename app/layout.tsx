import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monasans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PREPWISE",
  description: "An ai powerd app for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monasans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
