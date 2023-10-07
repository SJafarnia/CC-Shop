import Breadcrumb from "@/components/layout/Breadcrumb"
import { Metadata } from "next/types"

function About() {
    return (
        <>
            <Breadcrumb about={true} />
            <div className="mx-auto text-center my-20">
                <h1 className="text-6xl">About Us</h1>
                <p className="mt-16 text-left px-10 w-5/6 mx-auto">
                    <p className="mb-5">
                        {"We've started collecting cache sets since 2016 as a hobby. During that time, payment options are limited and you can only get these amazing sets in-game if you have paypal or a credit card. We feel fity seeing our friends unable to get the sets they want because they don't have access to such payment methods."}
                    </p>
                    <p className="mb-5">

                        {"Since collector's cache sets can be gifted once in-game. We came up with an idea to sell some of our extra cache bundles to our friends and that's when our gifting service was established."}
                    </p>
                    <p className="mb-5">
                        {"To date, top-up options for steam has become handy. Yet even so, many players still miss the opportunity of getting their hands on these cache bundles due to real life circumstances. That's where we come in and bridge the gap, giving you the ability to acquire cache sets bundle from current and previous International battlepass season, with peace of mind and guarantee that you'll receive the items you paid for."}
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