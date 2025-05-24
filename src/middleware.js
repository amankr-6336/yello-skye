import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get("firebaseToken")?.value;
  const path = url.pathname;

  if (path === "/") {
    if (token) {
      url.pathname = "/dashboard/project";
    } else {
      url.pathname = "/login";
    }
    return NextResponse.redirect(url);
  }

  if (path.startsWith("/dashboard") && !token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const authPages = ["/login", "/signUp", "/forgot-password"];

  if (authPages.includes(path) && token) {
    url.pathname = "/dashboard/project";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signUp", "/forgot-password", "/dashboard/:path*"],
};
