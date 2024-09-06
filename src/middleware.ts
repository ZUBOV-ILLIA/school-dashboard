import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { role } from "./lib/data";

export function middleware(req: NextRequest) {
  // return NextResponse.redirect(new URL("/home", request.url));

  console.log(">>>", req);

  if (req.nextUrl.pathname === "/") {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    if (role === "student") {
      return NextResponse.redirect(new URL("/student", req.url));
    }
    if (role === "teacher") {
      return NextResponse.redirect(new URL("/parent", req.url));
    }
    if (role === "parent") {
      return NextResponse.redirect(new URL("/teacher", req.url));
    }
  }

  return NextResponse.next();
}
