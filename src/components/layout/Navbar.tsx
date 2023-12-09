import Link from "next/link";
import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import prisma from "@utils/prisma";

import NavUtils from "./modules/NavbarComponents/NavUtils";

export default async function Navbar() {
    const session = await getServerSession(options)

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || ""
        }
    })
    prisma.$disconnect()

    return (
        <nav className="px-2 mt-10 xs:max-w-sm sm:max-w-3xl md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="bg-heavyPeri text-white xs:py-3 xs:px-4 sm:py-5 sm:px-7 rounded-md flex text-sm justify-between">
                <div className="navItems flex w-2/4 items-center">
                    <div className="ml-1">
                        <Link href="/" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </Link>
                    </div>
                    <div className=" ml-5 mt-1 text-lg underline whitespace-nowrap">
                        <Link href="/all-sets">
                            {"Collector's Caches"}
                        </Link>
                    </div>
                </div>
                <div className="w-2/12 relative">
                    <NavUtils access={user?.accessLevel === "ADMIN" ? "admin" : "basic"} isLoggedIn={session?.user?.email ? true : false} />
                </div>
            </div>
        </nav >
    )
}