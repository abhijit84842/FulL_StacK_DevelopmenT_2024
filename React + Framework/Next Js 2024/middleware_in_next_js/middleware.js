import { NextResponse } from "next/server"

export function middleware(request){
    // console.log(request)

    // if(request.nextUrl.pathname != "/login")
    return NextResponse.redirect(new URL("/login",request.url))
}

// See "Matching Paths" below 
export const config = {
    matcher: ['/about/:path*' ,'/study/:path*'],        // use can use multiple path here to make this type of array
  }