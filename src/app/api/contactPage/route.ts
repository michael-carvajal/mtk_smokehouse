import { type NextRequest, NextResponse } from 'next/server';
import { getContactPage } from '~/server/routes/contactPage';

export async function GET(req: NextRequest) {
  const contactPage = await getContactPage();
  return NextResponse.json(contactPage);
}
