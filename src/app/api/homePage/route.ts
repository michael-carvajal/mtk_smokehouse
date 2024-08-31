// src/app/api/homePage/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { getHomePage } from '~/server/routes/homePage';

export async function GET(req: NextRequest) {
  const homePage = await getHomePage();
  return NextResponse.json(homePage);
}

// export async function POST(req: NextRequest) {
//   const { name, createdBy } = await req.json();
//   const newProduct = await createProduct(name, createdBy);
//   return NextResponse.json(newProduct);
// }
