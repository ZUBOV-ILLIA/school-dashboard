import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { role } from "./lib/data";

export function middleware(req: NextRequest) {
  // return NextResponse.redirect(new URL("/home", request.url));

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${role}`, req.url));
  }

  // return NextResponse.next();
}
