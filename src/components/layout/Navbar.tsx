import Link from "next/link";
import PopoverSearchBar from "./modules/PopoverSearchBar";
import NavAuth from "./modules/NavAuth";
import { getServerSession } from "next-auth/next"
import { options } from "@app/api/(auth-group)/auth/[...nextauth]/options"
import prisma from "@utils/prisma";

export default async function Navbar() {
    const session = await getServerSession(options)

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email || ""
        }
    })

    return (
        <nav className="px-2 mt-10 xs:max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="bg-heavyPeri text-white py-5 px-7 rounded-md flex text-sm justify-between">
                <div className="navItems flex w-2/4 items-center">
                    <div className=" ml-1">
                        <Link href="/" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </Link>
                    </div>
                    <div className=" ml-5 mt-1">
                        <Link href="/all-sets">
                            {"Collector's Caches"}
                        </Link>
                    </div>
                    <div className=" ml-5 mt-1">
                        <a href="/">
                            <span>Reviews</span>
                        </a>
                    </div>
                </div>
                <div className="navutils flex justify-between w-2/12">
                    {user?.accessLevel === "ADMIN" ?
                        <Link href={"/admin/new-set"}>
                            <div className="post">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                </svg>
                            </div>
                        </Link>
                        : null}
                    <div className="login">
                        <NavAuth isLoggedIn={session?.user?.email ? true : false} />
                    </div>
                    <div className="searchbtn">
                        <PopoverSearchBar />
                    </div>
                    <div className="cart">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    )
}