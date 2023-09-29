import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import { notFound } from 'next/navigation'
import prisma from "@utils/prisma";

let user = {}

export default async function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {

    const session = await getServerSession(options)

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || ""
        }
    })

    if (user?.accessLevel !== "ADMIN") {
        return notFound()
    }

    return (
        <>
            {children}
        </>
    )
}

