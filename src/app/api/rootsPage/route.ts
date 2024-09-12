import { type NextRequest, NextResponse } from "next/server";
import { getOurRootsPage, updateOurRootsPage } from "~/server/routes/rootPage";

export async function GET() {
  const rootsPage = await getOurRootsPage();
  return NextResponse.json(rootsPage);
}
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const updatedRootsPage = await updateOurRootsPage(body);
  return NextResponse.json(updatedRootsPage);
}
