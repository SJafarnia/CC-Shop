import LoginTemplate from '@/components/templates/LoginTemplate'
import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

async function page() {
    const session = await getServerSession(options)
    if (session?.user?.email) {
        return redirect("/dashboard")
    }

    return (
        <LoginTemplate />
    )
}

export const metadata: Metadata = {
    title: 'Log in - CC Shop',
    description: "Dota 2 Collector's Cache Shop",
}

export default page