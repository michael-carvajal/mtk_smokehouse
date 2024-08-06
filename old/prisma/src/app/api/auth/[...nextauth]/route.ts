import { type NextRequest, NextResponse } from "next/server";
import  NextAuthHandler  from "next-auth";
import {trpcHandler}  from "../[...nextauth]/route";
import { authOptions } from "~/server/auth";

const unifiedHandler = async (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/api/auth")) {
    return NextAuthHandler(req, authOptions);
  } else if (req.nextUrl.pathname.startsWith("/api/trpc")) {
    return trpcHandler(req);
  }

  return NextResponse.next();
};

export const GET = unifiedHandler;
export const POST = unifiedHandler;
