// src/app/api/products/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { createProduct, getLatestProduct } from '~/server/routes/products';

export async function GET(req: NextRequest) {
  const latestProduct = await getLatestProduct();
  return NextResponse.json(latestProduct);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const newProduct = await createProduct(name);
  return NextResponse.json(newProduct);
}
