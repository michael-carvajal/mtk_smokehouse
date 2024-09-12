import { type NextRequest, NextResponse } from 'next/server';
import { getContactPage, updateContactPage } from '~/server/routes/contactPage';

export async function GET(req: NextRequest) {
  const contactPage = await getContactPage();
  return NextResponse.json(contactPage);
}
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const updatedContactPage = await updateContactPage(body);
  return NextResponse.json(updatedContactPage);
}
