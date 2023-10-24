import prisma from "@utils/prisma";
import { getServerSession } from "next-auth";
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSession(options)

    if (!session?.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const data = await req.json()
    const { sets } = data

    if (sets.cartItems && data.subTotal > 0) {
        const transaction = await prisma.transaction.create({
            data: {
                amount: data.subTotal,
                cardName: data.name,
                cardNumber: data.number,
                cardType: data.type,
                buyer: { connect: { email: data.user } },
                order: {
                    create: {
                        totalPrice: data.subTotal,
                        soldItem: {
                            createMany: {
                                data:
                                    data.sets.cartItems.map((set: { title: string, img: string, hero: string, price: number }) => {
                                        return ({
                                            buyerEmail: data.user, heroSetTitle: set.title, buyerSteamId: data.steamId
                                        })
                                    })
                            }
                        }
                    }
                }
            }
        })

        return NextResponse.json({ success: true }, { status: 200 })
    }
    return NextResponse.json({ success: false }, { status: 400 })
} 