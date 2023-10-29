'use client'
import Link from "next/link";
import PopoverSearchBar from "@layout/modules/NavbarComponents/PopoverSearchBar";
import NavAuth from "@layout/modules/NavbarComponents/NavAuth";
import Cart from "@layout/modules/NavbarComponents/Cart";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

function NavUtils({ access, isLoggedIn }: { access: string, isLoggedIn: boolean }) {
    const isMobil = useMediaQuery({ maxWidth: 640 });
    const [isMobile, setIsMobile] = useState(false)
    const [showMenu, setshowMenu] = useState("")
    const navRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (isMobil) { setIsMobile(true) } else { setIsMobile(false) }
    }, [isMobil])

    useEffect(() => {
        const handleClickOutside: any = (event: React.MouseEvent<HTMLDivElement>) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setshowMenu("-translate-x-[550px]");
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [])

    useEffect(() => {
        if (showMenu == "translate-x-[550px]") {
            document.body.classList.add('popup-menu-open');
        } else {
            document.body.classList.remove('popup-menu-open');
        }
        return () => {
            document.body.classList.remove('popup-menu-open');
        }
    }, [showMenu]);

    return (
        <div ref={navRef}>
            <div className={`${isMobile ? 'block z-50' : 'hidden'} `}>
                <div className="mr-8">
                    <button className="text-3xl cursor-pointer" onClick={() => setshowMenu("translate-x-[550px]")}>☰</button>
                </div>
            </div>
            <div className={`${isMobile ? `${showMenu} fixed top-0 bottom-0 duration-500 ease-in-out -left-[550px] xs:w-11/12 my-auto p-4 shadow-2xl text-white sm:w-8/12 mr-4 z-50 h-full bg-veryPeri border-solid border-[#EAEAEA]` : ""}`}>
                {/* <div className={`navutils `}> */}
                <div className={`${showMenu !== "translate-x-[550px]" ? "hidden" : null} flex justify-end items-center p-4 border-b border-white mb-4`}>
                    <svg onClick={() => setshowMenu("-translate-x-[550px]")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${isMobile ? 'block' : 'hidden'} w-7 h-7`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                {isMobile ?
                    <div className="my-16 pb-16 border-b border-white">
                        <div className="mx-auto text-3xl text-center my-8 items-center flex justify-center">
                            <Link href="/" className="flex gap-2" onClick={() => setshowMenu("-translate-x-[550px]")}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span className="grid place-content-center">
                                    Home
                                </span>
                            </Link>
                        </div>
                        <div className="mx-auto text-lg text-center my-8">
                            <Link href="/all-sets" onClick={() => setshowMenu("-translate-x-[550px]")}>
                                {"Collector's Caches"}
                            </Link>
                        </div>
                    </div>
                    : null}
                <div className={`flex ${isMobile ? 'flex-col gap-10 ml-4 pb-8' : 'flex-row justify-between'}`}>
                    {access === "admin" ?
                        <Link href={"/admin/new-set"} onClick={() => setshowMenu("-translate-x-[550px]")}>
                            <div className="post flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                </svg>
                                {isMobile ?
                                    <div className="grid place-content-center text-lg">
                                        <span>{isLoggedIn ? "Dashboard" : "Login"}</span>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </Link>
                        : null}
                    <div className="login flex gap-2" onClick={() => setshowMenu("-translate-x-[550px]")}>
                        <NavAuth isLoggedIn={isLoggedIn} isMobile={isMobile} />
                    </div>
                    <div className="searchbtn">
                        <PopoverSearchBar isMobile={isMobile} />
                    </div>
                    <div className="cart">
                        <Cart isMobile={isMobile} />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default NavUtils