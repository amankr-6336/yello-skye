import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get("firebaseToken")?.value;
  const path = url.pathname;



  if (path === "/") {
    console.log("main")
    if (token) {
      url.pathname = "/dashboard";
    } else {
      url.pathname = "/login";
    }
    return NextResponse.redirect(url);
  }

  // if (path.startsWith("/dashboard") && !token) {
  //   console.log("dahs")
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
