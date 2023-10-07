import { NextRequest, NextResponse } from 'next/server'
// import { uploadImage } from "@utils/cloudinary"
import { v2 as cloudinary } from 'cloudinary';
import prisma from '@utils/prisma';

export async function POST(request: NextRequest) {
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