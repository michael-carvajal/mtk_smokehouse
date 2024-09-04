import "~/styles/globals.css";

import { type Metadata } from "next";
import Link from "next/link";
import FeatureForm from "./FeatureForm";

export const metadata: Metadata = {
    title: "MT. Kisco Smokehouse",
    description: "Come find your next favorite seafood products",
    icons: [{ rel: "icon", url: "/mtk_photos/logo.jpg" }],
};

export default function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
         <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link href="/dashboard/content/homePage" className="font-semibold text-primary">
              Home Page
            </Link>
            <Link href="/dashboard/content/roots">Our Roots</Link>
            <Link href="/dashboard/content/contact">Contact / Locations</Link>
          </nav>
          <div className="grid gap-6">
            {children}
          </div>
        </div>
      </main>
    </div>
        </>
    );
}
