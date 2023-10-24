import { montserrat } from "@/app/fonts"
import Breadcrumb from "@/components/layout/Breadcrumb"
import { Metadata } from "next/types"

function About() {
    return (
        <>
            <Breadcrumb about={true} />
            <div className="mx-auto text-center my-20">
                <h1 className="text-6xl">About Us</h1>
                <p className={`${montserrat.className} mt-16 text-left px-10 w-5/6 mx-auto`}>
                    <p className="mb-5">
                        {"We provide collector's cache sets to players who did not have access to steam's payment methods during the event. or maybe you are someone who rarely plays the game and misses out the opportunity to get these sets, don't worry we got you covered."}
                    </p>
                    <p className="mb-5">
                        {"Since collector's cache sets have a limited purcahse time and can be gifted once in-game, We we feel like maybe new players would want some of these cache bundles that they never had a chance to get their hands on."}
                    </p>
                    <p className="mb-5">
                        {"That's where we come in and bridge the gap, giving you the ability to acquire cache sets bundle from current and previous International battlepass season, with peace of mind and guarantee that you'll receive the items you paid for."}
                    </p>
                </p>
            </div>
        </>
    )
}

export const metadata: Metadata = {
    title: "About US - CC Shop"
}

export default About