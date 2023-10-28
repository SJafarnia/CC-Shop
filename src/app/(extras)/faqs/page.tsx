import Breadcrumb from "@/components/layout/Breadcrumb"
import dynamic from "next/dynamic"
import { Metadata } from "next/types"

const DynamicComponent = dynamic(() => import("../../../components/templates/extras/FaqsTemplate"), {
    ssr: false
})

function page() {
    return (
        <>
            <Breadcrumb faq={true} />
            <DynamicComponent />
        </>
    )
}

export const metadata: Metadata = {
    title: "FAQs - CC Shop"
}

export default page