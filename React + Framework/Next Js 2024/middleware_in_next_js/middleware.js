import { NextResponse } from "next/server"

export function middleware(request){
    // console.log(request)

    // if(request.nextUrl.pathname != "/login")
    return NextResponse.redirect(new URL("/login",request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
  }