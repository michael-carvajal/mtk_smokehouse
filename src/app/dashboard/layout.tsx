import "~/styles/globals.css";

import { type Metadata } from "next";
import DashboardNavBar from "../_components/DashboardNavBar";
export const metadata: Metadata = {
  title: "MT. Kisco Smokehouse",
  description: "Come find your next favorite seafood products",
  icons: [{ rel: "icon", url: "/mtk_photos/logo.jpg" }],
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <section className="flex gap-10 w-full flex-col items-center  bg-gradient-to-b from-[#fffef7] to-[#feffee] text-white min-h-screen">
            <DashboardNavBar />
          {children}
      </section>
  );
}
