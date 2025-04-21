import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

const privateRoutes = ["/", "/projects", "/settings"];
const authRoutes = ["/login", "/register"];

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isApiRoute = nextUrl.pathname.includes("/api");

  if (isApiRoute) return;
  if (!isLoggedIn && isPrivateRoute)
    return NextResponse.redirect(
      new URL(`${process.env.FRONTEND_URL}/login`, req.url)
    );

  if (!isLoggedIn && isAuthRoute) return;
  if (isLoggedIn && isAuthRoute)
    return NextResponse.redirect(
      new URL(`${process.env.FRONTEND_URL}/`, req.url)
    );
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
