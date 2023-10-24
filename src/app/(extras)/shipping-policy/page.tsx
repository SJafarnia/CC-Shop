import Breadcrumb from "@/components/layout/Breadcrumb"
import { Metadata } from "next/types"

function ShippingPolicy() {
    return (
        <>
            <Breadcrumb pp={true} />
            <div className="mx-auto text-center my-20">
                <h1 className="text-6xl">
                    {"Shipping Policy"}
                </h1>
                <div className="text-left px-10 w-5/6 mx-auto">
                    <p className="my-12 font-semibold">
                        {" Dota 2 Collector's Cache items are labeled as Virtual products and can be delivered via in-game gifting option in Dota 2."}
                    </p>

                    <p className="mb-12">
                        <span className="t text-red-600"> {"Important:"}</span> {"Following Valve's gifting policy. For first time customers, please note that after you purchase an item, we still need to be friends on Steam for 30 days, before we can gift your purchased item(s) in-game in dota 2. During check-out,"}
                        <span className="t text-heavyPeri mx-1 font-semibold">
                            {"please don't forget to enter your dota 2 id or steam profile link under the"}
                            <span className="t font-semibold underline text-black mx-2">
                                {'"special intructions for seller"'}
                            </span> box
                        </span>{"so we can add you up on steam and deliver your order, after the 30-day gifting cooldown has been completed."}
                    </p>

                </div>
            </div>
        </>
    )
}


export const metadata: Metadata = {
    title: "Shipping Policy - CC Shop"
}

export default ShippingPolicy