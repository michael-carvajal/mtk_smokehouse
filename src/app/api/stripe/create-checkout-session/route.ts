// src/app/api/create-checkout-session/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { createProduct, getAllProducts } from '~/server/routes/products';
import {createCheckoutSession} from '~/server/routes/stripe'
// export async function GET(req: NextRequest) {
//   const allProducts = await getAllProducts();
//   return NextResponse.json(allProducts);
// }

export async function POST(req: NextRequest) {
  // const body = await req.json();
  const session = await createCheckoutSession();
  return NextResponse.json(session.client_secret);
}
