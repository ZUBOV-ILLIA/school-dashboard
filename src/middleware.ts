import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value;

  if (req.nextUrl.pathname === "/" && role) {
    return NextResponse.redirect(new URL(`/${role}`, req.url));
  }

  if (req.nextUrl.pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", req.url));

    response.cookies.delete("role");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
