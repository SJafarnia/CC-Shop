import PaymentTemplate from '@/components/templates/PaymentTemplate'
import { Metadata } from "next/types"

function page() {
    return (
        <PaymentTemplate />
    )
}

export const metadata: Metadata = {
    title: "Checkout - CC Shop"
}

export default page