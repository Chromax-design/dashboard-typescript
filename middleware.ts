import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);
const authRoutes = ["/login", "/register"];

export default auth(async (req) => {
  const isloggedIn = !!req.auth;
  const { nextUrl } = req;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isloggedIn && isAuthRoute) {
    return NextResponse.redirect(
      new URL(`${process.env.FRONTEND_URL}/`, req.url)
    );
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
