import { NextRequest, NextResponse } from 'next/server'
import prisma from '@utils/prisma';
import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"

export async function POST(request: NextRequest) {
    const session = await getServerSession(options)

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || ""
        }
    })

    if (user?.accessLevel !== "ADMIN") {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const requestData = await request.formData()

    const values: any = {};

    for (const [key, value] of requestData.entries()) {
        values[key] = value;
    }

    const { title, hero, year, price, category, description, total, id, categoryId } = values

    if (categoryId) {
        try {
            const editSet = await prisma.heroSet.update({
                where: {
                    id: id
                },
                data: {
                    title,
                    hero,
                    year,
                    price: +price,
                    description,
                    total: +total,
                    category: {
                        upsert: {
                            create: {
                                title: category
                            },
                            update: {
                                title: category
                            },
                            where: {
                                id: categoryId
                            }
                        }
                    }
                },
            })
        } catch (err) {
            console.log(err)
        } finally {
            await prisma.$disconnect()
        }
        return NextResponse.json({ success: true })
    }

    try {
        const editSet = await prisma.heroSet.update({
            where: {
                id: id
            },
            data: {
                title,
                hero,
                year,
                price: +price,
                description,
                total: +total,
            },
        })
    } catch (err) {
        console.log(err)
    } finally {
        await prisma.$disconnect()
    }
    return NextResponse.json({ success: true })
}