"use client"
import { useState, useEffect, FormEvent } from "react"
import CheckoutCart from './CheckoutCart'
import { useSession } from 'next-auth/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, remAllCartItems } from '@redux/features/CartItemsSlice'
import { useRouter } from 'next/navigation'
import { selectPaymentLoadingSlice, setPaymentLoadingState } from '@redux/features/PaymenrLoadingSlice'
import Cards, { Focused } from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

type ccType = {
    cvc: string,
    expiry: string,
    name: string,
    number: string,
    type: string,
    steamId: string
}

function Crd(): JSX.Element {
    const dispatch = useDispatch()
    const router = useRouter()
    const cartState = useSelector(selectCartItems)
    const loadingState = useSelector(selectPaymentLoadingSlice)
    const { data: session } = useSession()
    const [submitted, setSubmitted] = useState(false)
    const [focus, SetFocus] = useState("");
    const [formData, setFormData] = useState<ccType>({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        type: '',
        steamId: ''
    })

    const subTotal = cartState?.cartItems?.reduce((prev: any, cur: any) => {
        return prev + (+cur.price)
    }, 0)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    const steamIdHandler = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    }

    const isFormValid =
        formData.number.length >= 16 &&
        formData.cvc.length >= 3 &&
        formData.expiry.length >= 4;

    const createOrder = async () => {

    }

    useEffect(() => {
        const submitter = async () => {
            const callApi = await fetch(`http://localhost:3000/api/payment`, {
                method: "POST",
                body: JSON.stringify({ ...formData, subTotal, user: session?.user?.email, sets: cartState }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (callApi.status == 200) {
                dispatch(remAllCartItems())
                router.push("/")
            } else {
                dispatch(setPaymentLoadingState(false))
            }
        }

        if (submitted) {
            submitter();
        }
    }, [submitted]);

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormValid) {
            dispatch(setPaymentLoadingState(true));
            setSubmitted(true);
        }
    }

    return (
        <div className='my-14' id='cart'>
            <div className='py-20 px-5 my-40 text-center text-white relative after:absolute after:skew-y-[-5deg] isolate after:content-[""] after:-z-10 after:inset-0 after:bg-gradient-to-r  from-lightCoral to-livingCoral after:rounded-sm'>
                <h3 className='text-2xl mb-4'>Security Warning!</h3>
                <p className=''>Please note that this is a demo website, do not use any real credit card info!</p>
            </div>
            {
                loadingState ?
                    <div className='w-full p-40 animate-pulse bg-slate-100 flex items-center justify-center'>
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col'>
                        <Cards
                            cvc={formData.cvc}
                            expiry={formData.expiry}
                            focused={focus as Focused}
                            name={formData.name}
                            number={formData.number}
                            issuer={formData.type}
                        />
                        <form onSubmit={submitHandler} className='flex flex-col justify-center items-center my-10 gap-4'>
                            <div className="flex gap-4">
                                <div className="">
                                    <div className="relative">
                                        <label
                                            htmlFor="number"
                                            className={`${formData.number ? "-translate-y-[1rem] scale-[0.7]" : ""} bg-white px-2 pt-0 pointer-events-none absolute left-1 top-1 mb-0 max-w-[90%] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.7] peer-focus:text-primary-600 dark:text-neutral-200 dark:peer-focus:text-primary`}
                                        >Card Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="number"
                                            maxLength={16}
                                            required
                                            pattern="[0-9]*"
                                            title="Please enter digits only."
                                            className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            value={formData.number}
                                            name="number"
                                            onChange={handleInputChange}
                                            onFocus={(e) => SetFocus(e.target.name)}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="relative">
                                        <label
                                            htmlFor="name"
                                            className={`${formData.name ? "-translate-y-[1rem] scale-[0.7]" : ""} bg-white px-2 pt-0 pointer-events-none absolute left-1 top-1 mb-0 max-w-[90%] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.7] peer-focus:text-primary-600 dark:text-neutral-200 dark:peer-focus:text-primary`}
                                        >Card Name
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={60}
                                            id="name"
                                            required
                                            pattern="[a-zA-Z]*"
                                            title="Please enter letters only."
                                            className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            value={formData.name}
                                            name="name"
                                            onChange={handleInputChange}
                                            onFocus={(e) => SetFocus(e.target.name)}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-around">
                                <div className="w-1/3 relative">
                                    <label
                                        htmlFor="expiry"
                                        className={`${formData.expiry ? "-translate-y-[1rem] scale-[0.7]" : ""} bg-white px-2 pt-0 pointer-events-none absolute left-1 top-1 mb-0 max-w-[90%] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.7] peer-focus:text-primary-600 dark:text-neutral-200 dark:peer-focus:text-primary`}
                                    >Expiration Date
                                    </label>
                                    <input
                                        type="tel"
                                        name="expiry"
                                        id="expiry"
                                        maxLength={5}
                                        required
                                        className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        value={formData.expiry}
                                        onChange={handleInputChange}
                                        onFocus={(e) => SetFocus(e.target.name)}
                                    ></input>
                                </div>
                                <div className="w-1/3 relative">
                                    <label
                                        htmlFor="cvc"
                                        className={`${formData.cvc ? "-translate-y-[1rem] scale-[0.7]" : ""} bg-white px-2 pt-0 pointer-events-none absolute left-1 top-1 mb-0 max-w-[90%] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.7] peer-focus:text-primary-600 dark:text-neutral-200 dark:peer-focus:text-primary`}
                                    >CVC
                                    </label>
                                    <input
                                        type="tel"
                                        id="cvc"
                                        name="cvc"
                                        pattern="[0-9]*"
                                        title="Please enter digits only."
                                        required
                                        maxLength={5}
                                        className="peer border-solid focus:border-2 transition-color duration-0 focus:border-veryPeri shadow-sm border block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none ease-linear focus:placeholder:opacity-100 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        value={formData.cvc}
                                        onChange={handleInputChange}
                                        onFocus={(e) => SetFocus("cvc")}
                                    ></input>
                                </div>
                            </div>
                            <button type='submit' className='text-center inline-block rounded-md !bg-veryPeri px-6 pb-2 pt-2.5 shadow-sm transition duration-150 ease-in-out focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 text-white my-5'>Checkout</button>
                        </form>
                    </div>
            }
            <CheckoutCart setState={steamIdHandler} />
        </div >
    )
}

export default Crd