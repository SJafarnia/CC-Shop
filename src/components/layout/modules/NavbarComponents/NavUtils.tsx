'use client'
import Link from "next/link";
import PopoverSearchBar from "@layout/modules/NavbarComponents/PopoverSearchBar";
import NavAuth from "@layout/modules/NavbarComponents/NavAuth";
import Cart from "@layout/modules/NavbarComponents/Cart";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

function NavUtils({ access, isLoggedIn }: { access: string, isLoggedIn: boolean }) {
    const isMobil = useMediaQuery({ maxWidth: 640 });
    const [isMobile, setIsMobile] = useState(false)
    const [showMenu, setshowMenu] = useState("")

    useIsomorphicLayoutEffect(() => {
        if (isMobil) { setIsMobile(true) } else { setIsMobile(false) }
    }, [isMobil])

    useEffect(() => {
        if (showMenu == "-translate-x-[630px]") {
            document.body.classList.add('popup-menu-open');
        } else {
            document.body.classList.remove('popup-menu-open');
        }
        return () => {
            document.body.classList.remove('popup-menu-open');
        }
    }, [showMenu]);

    return (
        <>
            <div className={`${isMobile ? 'block z-50' : 'hidden'} `}>
                <div className="mr-8">
                    <button className="text-3xl cursor-pointer" onClick={() => setshowMenu("-translate-x-[380px]")}>☰</button>
                </div>
            </div>
            <div className={`${isMobile ? `${showMenu} fixed top-0 bottom-0 duration-500 ease-in-out -right-[380px] xs:w-9/12 p-4 shadow-2xl text-white sm:w-8/12 ml-4 z-50 h-full bg-veryPeri border-solid border-[#EAEAEA]` : ""}`}>
                {/* <div className={`navutils `}> */}
                <div className={`${showMenu !=="-translate-x-[380px]" ? "hidden":null} flex justify-between items-center p-2 pb-4 border-b border-white mb-4`}>
                    <svg onClick={() => setshowMenu("translate-x-[630px]")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isMobile ? 'block' : 'hidden'} w-6 h-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {isMobile ?
                    <div className="my-8 border-b border-white">
                        <div className="mx-auto text-center my-8 items-center flex justify-center">
                            <Link href="/" className="">
                                Home
                            </Link>
                        </div>
                        <div className="mx-auto text-center my-8">
                            <Link href="/all-sets">
                                {"Collector's Caches"}
                            </Link>
                        </div>
                    </div>
                    : null}
                <div className={`flex ${isMobile ? 'flex-col gap-6 items-center border-b border-white pb-8' : 'flex-row justify-between'}`}>
                    {access === "admin" ?
                        <Link href={"/admin/new-set"}>
                            <div className="post">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                </svg>
                            </div>
                        </Link>
                        : null}
                    <div className="login">
                        <NavAuth isLoggedIn={isLoggedIn} />
                    </div>
                    <div className="searchbtn">
                        <PopoverSearchBar />
                    </div>
                    <div className="cart">
                        <Cart />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default NavUtils