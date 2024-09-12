import { type NextRequest, NextResponse } from 'next/server';
import { getOurRootsPage } from '~/server/routes/rootPage';

export async function GET(req: NextRequest) {
  const rootsPage = await getOurRootsPage();
  return NextResponse.json(rootsPage);
}
// export async function PATCH(req: NextRequest) {
//   const body = await req.json();
//   const newProduct = await updateHomePage(body);
//   return NextResponse.json(newProduct);
// }

