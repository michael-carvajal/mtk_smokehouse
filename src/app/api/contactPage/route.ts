import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const contactPage = await getContactPage();
  return NextResponse.json(contactPage);
}
