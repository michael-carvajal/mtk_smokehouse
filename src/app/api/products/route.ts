// src/app/api/products/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { createProduct, getAllProducts } from '~/server/routes/products';

export async function GET(req: NextRequest) {
  const allProducts = await getAllProducts();
  return NextResponse.json(allProducts);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = await createProduct(body);
  return NextResponse.json(newProduct);
}
