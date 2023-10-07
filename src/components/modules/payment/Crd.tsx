"use client"
import CreditCard from 'predictalab-react-credit-card'
import { useState } from "react"
import CheckoutCart from './CheckoutCart'
import PayPal from './PayPal'

type ccType = {
    cvc: string,
    month: number,
    year: number,
    name: string,
    number: string,
    type: string
}

function Crd() {
    console.log(PayPal)
    const [formData, setFormData] = useState<ccType>({
        number: '',
        name: '',
        month: +'',
        year: +'',
        cvc: '',
        type: ''
    })

    return (
        <>
            <CreditCard
                gradientStartColor="#6667AB"
                gradientEndColor="#3083f7"
                buttonColor="#6667AB"
                buttonTextColor="#fff"
                submitAction={(values) => {
                    const newState = Object.fromEntries(
                        Object.entries(values).filter(([key]) => key !== "flipped")
                    );
                    setFormData(newState as unknown as any)
                }}
            />
            {/* <PayPal /> */}
            <CheckoutCart />
        </>
    )
}

export default Crd