import prisma from "@utils/prisma";
import { hash } from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email;", type: "text" },
                password: { label: "password", type: "text" },
            },
            async authorize(credentials) {
                try {
                    const hashedPw = hash(credentials?.password as string, 10)
                    const User = await prisma.user.findFirst({
                        where: {
                            email: credentials?.email,
                            password: hashedPw as unknown as string
                        },
                        select: {
                            email: true,
                            id: true
                        }
                    })
                    if (!User) {
                        throw new Error("User not found")
                        // return null
                    }
                    else {
                        return User
                    }
                }
                catch (e) {
                    throw (JSON.stringify({ "err": e }))
                } finally{
                    prisma.$disconnect()
                }
            },

        })
    ]
    ,
    pages: {
        signIn: "/login"
    }
}