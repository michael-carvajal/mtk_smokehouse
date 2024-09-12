// app/dashboard/layout.js
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      {/* Your common dashboard layout here, e.g., navigation, sidebar */}
      {children}
    </>
  );
}
