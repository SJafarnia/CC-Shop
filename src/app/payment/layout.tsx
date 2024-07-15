import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'

// export const dynamic = "force-dynamic"

export default async function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(options)

    if (!session?.user?.email) {
        return redirect("/login?redirect=payment")
        
    }

    return (
        <>
            {children}
        </>
    )
}

