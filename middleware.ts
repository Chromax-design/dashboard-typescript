import { NextRequest, NextResponse } from "next/server"
import authConfig from "./auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig)

const privateRoutes = ['/', '/projects', '/settings'];
const authRoutes = ['/login', '/register']

export default auth(async (req) => {
  const isloggedIn = !!req.auth
  const { nextUrl } = req
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isApiRoute = nextUrl.pathname.includes('/api')

  if (isApiRoute) return;
  if (!isloggedIn && isPrivateRoute) {
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/login`);
  }
  if (isloggedIn && isAuthRoute) {
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/`);
  }
  if (!isloggedIn && isAuthRoute) return

  console.log("middle ware was called", req.auth)
})


export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}