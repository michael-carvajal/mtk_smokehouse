import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from './providers'
import RenderNavBar from "./_components/RenderNavBar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "~/app/api/uploadthing/core"
import Footer from "./_components/Footer";
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
      <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <body className="flex gap-10 flex-col items-center  bg-gradient-to-b from-[#fffef7] to-[#feffee] text-white min-h-screen">
        <Providers>
          <RenderNavBar />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
