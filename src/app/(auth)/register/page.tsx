import RegisterTemplate from '@/components/templates/RegisterTemplate'
import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'

async function page() {
    const session = await getServerSession(options)
    if (session?.user?.email) {
        return redirect("/dashboard")
    }

    return (
        <RegisterTemplate />
    )
}

export default page