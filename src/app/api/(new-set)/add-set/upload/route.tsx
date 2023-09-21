import { NextRequest, NextResponse } from 'next/server'
// import { uploadImage } from "@utils/cloudinary"
import { v2 as cloudinary } from 'cloudinary';
import prisma from '@utils/prisma';

export async function POST(request: NextRequest) {
    const requestData = await request.formData()
    const file: File | null = requestData.get("file") as unknown as File

    if (!file) {
        return NextResponse.json({ success: false })
    }

    const values: any = {};

    for (const [key, value] of requestData.entries()) {
        values[key] = value;
    }

    const { title, hero, year, price, category, description } = values

    const timestamp = Math.round((new Date).getTime() / 1000)
    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp,
        // public_id: `${file.name}`
    }, `${process.env.API_SECRET}`)

    const imgForm = new FormData()

    imgForm.set("timestamp", `${timestamp}`)
    imgForm.set("signature", signature)
    imgForm.set("api_key", `${process.env.API_KEY}`)
    imgForm.set("file", file)

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: imgForm
    }).then(r => r.json())

    const newSet = await prisma.heroSet.create({
        data: {
            HeroImg: {
                create: {
                    link: res.secure_url,
                }
            },
            hero,
            title,
            year,
            price: +price,
            category: {

                create: {
                    title: category
                }
            },
            description
        }
    })

    // const bytes = await file.arrayBuffer()
    // const buffer = Buffer.from(bytes)

    // return NextResponse.json({ imgLink: res.secure_url })
    // console.log(data)

    return NextResponse.json({ success: true })
}