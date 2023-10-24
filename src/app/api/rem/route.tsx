import prisma from "@utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt"

export async function POST(req: NextRequest) {
    // const user = await prisma.category.delete({
    //     where: {
    //         id: "aa157173-1766-4684-8380-c8cadd44fc78"
    //     }
    // })
    // console.log(user)
    return NextResponse.json({ "message": "x" }, { status: 200 })
}