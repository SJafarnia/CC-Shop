import Breadcrumb from "@/components/layout/Breadcrumb"
import { Metadata } from "next/types"

function RefundPolicy() {
    return (
        <>
            <Breadcrumb pp={true} />
            <div className="mx-auto text-center my-20">
                <h1 className="text-6xl">
                    Refund Policy
                </h1>
                <div className="text-left px-10 w-5/6 mx-auto">
                    <p className="my-12">
                        {"Given the nature of digital items, we do not generally offer a refund or credit on a purchase."}
                    </p>
                    <h3 className="mb-3 font-semibold text-4xl">{"RETURN POLICY"}</h3>
                    <p className="mb-12">
                        <p className="mb-5">
                           {" Collector's Cache items are exclusive ingame cosmetics that can only be gifted ingame in Dota 2 once. For this, return is not possible. Once your purchased item has been delivered via the in-game gifting option, you can no longer transfer the item to another account."}
                        </p>
                    </p>
                    <h3 className="mb-3 font-semibold text-4xl">{"REFUND POLICY"}</h3>
                    <p className="mb-12">
                        <p className="">
                            {"Collector's Cache items are labeled as Virtual products:"}
                        </p>
                        <p className="mb-5">
                            {"We do not issue refunds for virtual products once the order is submitted. We recommend contacting us for assistance if you experience any issues receiving or using the products. By buying any product from our website you agree that, because of the nature of the products sold, Which are virtual, there are no refunds under any circumstance. If you submit any payment you agree that you will not dispute, ask for a partial refund, or a full refund. If you do not agree to the above, please do not buy any product."}
                        </p>

                        <p className="mb-5 font-semibold">
                           {"All purchases in our store are final. REFUNDS WILL NOT BE PROVIDED FOR ANY PURCHASED ITEM."}
                            <span className="t font-normal ml-1">
                               {" In such a circumstance, you will continue to receive the item(s) you purchased on Steam, after the 30-day gifting threshold by Valve, has been completed. Each digital items seller/reseller reserves the right to offer refunds, discounts or other consideration in select circumstances at its sole discretion. Please note that each circumstance is unique and election to make such an offer in one instance does not create the obligation to do so in another."}
                            </span>
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}


export const metadata: Metadata = {
    title: "Refund Policy - CC Shop"
}

export default RefundPolicy