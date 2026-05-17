import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/.well-known") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/bn" || pathname.startsWith("/bn/")) {
    const stripped = pathname.replace(/^\/bn/, "") || "/";
    const url = req.nextUrl.clone();
    url.pathname = stripped;
    url.search = search;
    const res = NextResponse.rewrite(url);
    res.headers.set("x-locale", "bn");
    res.headers.set("x-pathname", pathname);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("x-locale", "en");
  res.headers.set("x-pathname", pathname);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon|.*\\..*).*)"]
};
