// app/dashboard/layout.js
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "~/server/auth";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession();
  console.log('session in dashboard ======>', session);
  
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      {/* Your common dashboard layout here, e.g., navigation, sidebar */}
      {children}
    </>
  );
}
