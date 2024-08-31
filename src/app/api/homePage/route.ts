// src/app/api/homePage/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { getHomePage, updateHomePage } from '~/server/routes/homePage';

export async function GET(req: NextRequest) {
  const homePage = await getHomePage();
  return NextResponse.json(homePage);
}
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const newProduct = await updateHomePage(body);
  return NextResponse.json(newProduct);
}

