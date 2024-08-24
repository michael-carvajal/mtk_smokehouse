import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from './_components/Navbar';

export const metadata: Metadata = {
  title: "MT. Kisco Smokehouse",
  description: "Come find your next favorite seafood products",
  icons: [{ rel: "icon", url: "/mtk_photos/logo.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col items-center justify-center bg-gradient-to-b from-[#fffef7] to-[#feffee] text-white">
        <Navbar />

        {children}</body>
    </html>
  );
}
