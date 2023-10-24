import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import { redirect } from 'next/navigation'
import prisma from "@utils/prisma"
import { getAllOrders, getUserOrders } from "@utils/queries"
import Dashboard from "@/components/modules/dashboard/Dashboard";

async function page() {
    const session = await getServerSession(options)

    if (!session?.user?.email) {
        return redirect("/login")
    }
    const userData = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!userData) {
        return redirect("/login")
    }

    const orders = userData.accessLevel == "ADMIN" ? await getAllOrders() : await getUserOrders(userData.email)

    return (
        <Dashboard userAccess={userData.accessLevel} orders={orders} />
    )
}

export default page