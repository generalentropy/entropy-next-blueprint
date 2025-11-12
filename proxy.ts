import { NextResponse, type NextRequest } from "next/server";
import { IS_DEV } from "./constants";

export function proxy(request: NextRequest) {
  console.log("New request 🔥");

  if (IS_DEV) {
    return NextResponse.next();
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
