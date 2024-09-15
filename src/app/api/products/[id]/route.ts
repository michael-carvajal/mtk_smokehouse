import { type NextRequest, NextResponse } from 'next/server';
import { getProductById, updateProduct, deleteProduct } from '~/server/routes/products';

export async function GET(req: NextRequest) {
  const id = parseInt(req.url.split('/').at(-1)!);

  if (!id) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  const product = await getProductById(id);
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PATCH(req: NextRequest) {
  const id = parseInt(req.url.split('/').at(-1)!);
  const updates = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  const updatedProduct = await updateProduct(id, updates);

  return NextResponse.json(updatedProduct);
}

export async function DELETE(req: NextRequest) {
  const id = parseInt(req.url.split('/').at(-1)!);


  if (!id) {
    return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
  }

  await deleteProduct(id);

  return NextResponse.json({ message: 'Product deleted successfully' });
}
