import prisma from "@utils/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as bcrypt from "bcrypt"

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        if (!email || !password) {
            return NextResponse.json({ error: true, message: "Both fields are required" }, { status: 400 })
        }

        const requirements = [
            // Must be at least 8 characters
            password.length >= 8,
            // Must contain at least 1 uppercase letter
            /[A-Z]/.test(password),
            // Must contain at least 1 lowercase letter
            /[a-z]/.test(password),
            // Must contain at least 1 number
            /\d/.test(password)
        ]

        // If all requirements are met, password is valid
        const isValid = requirements.every(Boolean)

        if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
            return NextResponse.json({ error: true, message: "Please Enter a Valid Email Address" }, { status: 400 })
        }
        if (!isValid) {
            return NextResponse.json({ error: true, message: "Password Is Not Secure" }, { status: 400 })
        }

        const isUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (isUser) {
            prisma.$disconnect()
            return NextResponse.json({ error: true, message: "User Already Exists!" }, { status: 409 })
        }

        const user = await prisma.user.create({
            data: {
                password: await bcrypt.hash(password, 10),
                email: email.toLowerCase(),
                // accessLevel: "ADMIN"
            }
        })

        prisma.$disconnect()
        const { email: userEmail, accessLevel } = user
        return NextResponse.json({ message: `User ${userEmail} with Access Level of ${accessLevel}} has been created.`, error: false }, { status: 201 })
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({ error: true, message: "something is wrong..." }, { status: 500 })
    }
}

