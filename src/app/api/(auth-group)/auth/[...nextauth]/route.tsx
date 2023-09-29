import NextAuth from "next-auth"
import type { NextApiRequest, NextApiResponse } from "next"
import { options } from "./options"



const handler = NextAuth(options)

export { handler as GET, handler as POST }