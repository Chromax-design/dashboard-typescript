import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export default {
    providers: [Credentials({
        credentials: {
            email: {
                label: 'Email',
                type: 'email'
            },
            password: {
                label: 'Password',
                type: 'password'
            }
        },
        authorize: async (credentials) => {
            const { email, password } = credentials as { email: string, password: string };

            try {
                if (!email || !password) return null

                const userExists = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })
                if (!userExists) return null

                const checkPassword = await bcrypt.compare(password, userExists.password)
                if (!checkPassword) return null

                return {
                    id: userExists.id,
                    email: userExists.email,
                    name: userExists.firstName
                }

            } catch (error) {
                console.log(error)
                return null
            }
        }
    }
    )]
} satisfies NextAuthConfig