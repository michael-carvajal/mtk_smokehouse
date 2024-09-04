import "~/styles/globals.css";

import { type Metadata } from "next";
import Navbar from "../_components/Navbar";
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
            <Navbar />
            {children}
        </>
    );
}
