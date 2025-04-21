import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          if (!email || !password) return null;

          const userExists = await prisma.user.findUnique({
            where: { email },
          });

          if (!userExists) return null;

          const checkPwd = await bcrypt.compare(password, userExists.password);

          if (!checkPwd) return null;

          return {
            id: userExists.id,
            name: userExists.firstName,
            email: userExists.email,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
