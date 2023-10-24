import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import prisma from '@utils/prisma'

export async function POST(req: NextRequest) {
    const session = await getServerSession(options)

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || ""
        }
    })

    if (user?.accessLevel !== "ADMIN") {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    const orders = ""
    return NextResponse.json({ success: true }, { status: 200 })
}