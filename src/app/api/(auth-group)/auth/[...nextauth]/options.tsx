import prisma from "@utils/prisma";
import { compare } from "bcrypt";
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
            async authorize(credentials: any) {
                try {
                    const User = await prisma.user.findFirst({
                        where: {
                            email: credentials?.email,
                        },
                        select: {
                            email: true,
                            id: true,
                            password: true,
                        }
                    })
                    if (!User) {
                        // throw new Error("User not found")
                        return null
                    }
                    else {
                        const isPasswordTrue = await compare(credentials?.password as string, User.password);
                        if (isPasswordTrue) {
                            return {
                                email: User.email,
                                id: User.id,
                            }
                        } else return null
                    }
                }
                catch (e) {
                    throw (JSON.stringify({ "err": e }))
                } finally {
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