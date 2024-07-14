import { NextResponse } from "next/server";

export function middleware(request) {
  // const userAgent = request.headers.get("user-agent") || "";
  // const isMobile = /mobile/i.test(userAgent);
  // const url = request.nextUrl.clone();

  // if (!isMobile && !url.pathname.startsWith("/not-available")) {
  //   url.pathname = "/not-available";
  //   return NextResponse.redirect(url);
  // }

  // if (isMobile && url.pathname.startsWith("/not-available")) {
  //   url.pathname = "/";
  //   return NextResponse.redirect(url);
  // }

  // return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!_next/static|favicon.ico).*)"],
// };
