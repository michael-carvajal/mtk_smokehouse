import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from './_components/Navbar';
import Providers from './providers'
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
      <body className="flex gap-10 flex-col items-center justify-center bg-gradient-to-b from-[#fffef7] to-[#feffee] text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              <span className="mr-6">&copy; 2024 Mt. Kisco Smokehouse</span>
              <a href="https://michael-carvajal-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Created by Michael Carvajal</a>.

            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
