// src/app/api/create-checkout-session/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import createCheckoutSession from  '~/server/routes/stripe'
export async function GET(req: NextRequest) {
  const url =  req.url
  const checkoutSession = await createCheckoutSession(undefined, req, url.split('=').at(-1)!);
  return NextResponse.json(checkoutSession);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  
  const session = await createCheckoutSession(JSON.parse(body), req, undefined);
  return NextResponse.json({clientSecret : session.clientSecret}); 
}
