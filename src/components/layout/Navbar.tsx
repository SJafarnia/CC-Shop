import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="px-2 mt-10 xs:max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="bg-heavyPeri text-white py-5 px-7 rounded-md flex text-sm justify-between">
                <div className="navItems flex w-2/4">
                    <div className="p-1 ml-1">
                        <Link href="/" className="">Home</Link>
                    </div>
                    <div className="p-1 ml-4">
                        <Link href="/all-sets">
                            {"Collector's Caches"}
                        </Link>
                    </div>
                    <div className="p-1 ml-4">
                        <a href="/">
                            <span>Reviews</span>
                        </a>
                    </div>
                </div>
                <div className="navutils flex justify-between w-2/12">
                    <div className="login">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </button>
                    </div>
                    <div className="searchbtn">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
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
        </nav>
    )
}