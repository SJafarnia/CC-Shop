import prisma from "@utils/prisma";
import { deslugify } from "@utils/slugify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { query } = await request.json()
    const data = await prisma.heroSet.findMany({
        where: {
            OR: [
                {
                    hero: {
                        contains: deslugify(query)
                    },
                },
                {
                    title: {
                        contains: deslugify(query)
                    }
                },
                {
                    category: {
                        title: {
                            contains: deslugify(query)
                        }
                    }
                }
            ]
        }
    })

    console.log(data)
    return NextResponse.json({ "success": true })
}