import Image from "next/image"
import SearchBar from "./modules/SearchBar"
import Socials from "./modules/Socials"
import Nav from "./modules/Nav"
import Link from "next/link"

export default function Footer() {

    return (
        <footer className="bg-heavyPeri text-white px-6 py-4">
            <div className="flex flex-col md:flex-row">

                <div className="footer-info mx-6 mt-4 flex md:w-2/5 ">
                    <div>
                        <h3 className="p-1 mb-6 text-xl">About Us</h3>
                        <Image src="/logo/logo_200x200__2_-removebg-preview.png" className="logo mb-3" alt="logo" width={80} height={60}></Image>
                        <div>
                            <p className="mb-2">
                                {" Collector's Cache Shop serves with the goal of providing dota 2 players the chance of acquiring exclusive cache sets they've missed, with ease."}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-nav mx-6 mt-4 md:w-1/3 border-t-[1px] md:border-t-0">
                    <h3 className="mt-4 mb-6 text-xl">Links</h3>
                    <Nav />
                </div>

                <div className="navutils flex md:w-1/3 border-t-[1px] md:border-t-0 justify-around items-center flex-col">
                    <Image src="/logo/logo_200x200__2_-removebg-preview.png" className="logo my-4" alt="logo" width={180} height={150}></Image>
                    <SearchBar />
                    <div className="socials text-white">
                        <Socials />
                    </div>
                </div>

            </div>
            <div className="border-t-2 mt-4">
                <div className="p-4 text-center mt-2">
                    <div
                        className="mb-6"
                    >Copyright © 2023 <Link href={"/"} className="text-livingCoral">{"Collector's Cache Shop"}</Link> | All Rights Reserved
                    </div>
                    <p className="text-sm text-left mr-2">
                        Disclaimer: <Link href={"/"} className="text-livingCoral">{"Collector's Cache Shop"}</Link>  is not owned by Valve, or affiliated with Valve in any way. Dota 2 is a registered trademark of Valve Corporation. Game content and materials are trademarks and copyrights of their respective publisher and its licensors. No copyright infridgement intended.
                    </p>
                </div>

            </div>
        </footer>
    )
}