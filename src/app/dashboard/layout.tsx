// app/dashboard/layout.js
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  
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
