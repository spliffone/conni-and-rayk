import { localePrefix, defaultLocale, locales, pathnames } from "./config";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  console.log("request.nextUrl.pathname", request.nextUrl);
  return NextResponse.next({ headers });
}

export default createMiddleware({
  // Used when no locale matches
  defaultLocale,
  // A list of all locales that are supported
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(de|en)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
