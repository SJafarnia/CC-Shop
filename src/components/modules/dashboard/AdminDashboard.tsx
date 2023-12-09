"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { slugify } from "@utils/textModifer"
import { soldItemType } from "types"

function AdminDashboard({ ordersData }: { ordersData: soldItemType }) {
    const [showOrders, setShowOrder] = useState(false)
    const [orders, setOrders] = useState<any>(null)

    useEffect(() => {
        const fetcher = () => {
            //call to api for sets
            setOrders(ordersData)
        }

        if (showOrders) {
            fetcher()
        }
    }, [showOrders])

    return (
        <div className="flex justify-between xs:flex-col sm:flex-row w-full">
            <div className="bg-veryPeri text-white rounded-md p-4 sm:self-start">
                <ul>
                    <li className="my-5 mx-3">
                        <button className="flex items-center" onClick={() => setShowOrder((prev) => !prev)}>
                            <div className="flex items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <p className="mt-2">
                                    All Orders
                                </p>
                            </div>
                        </button>
                    </li>
                    <li className="my-6 mx-2">
                        <Link href={"/admin/new-set"} className="flex items-center">
                            <div className="flex items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <p className="mt-2">
                                    Add Set
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="xs:w-full sm:w-3/4 xs:mt-10 sm:mt-2">
                {showOrders ?
                    orders ?
                        orders?.map((item: soldItemType) => {
                            const date = new Date(item.dateSold)
                            const year = date.getFullYear().toString().slice(-2);
                            const month = (date.getMonth() + 1).toString().padStart(2, '0');
                            const day = date.getDate().toString().padStart(2, '0');
                            const formattedDate = `${year}/${month}/${day}`;
                            return (
                                <div className="menu-items px-1 py-3 border-b border-b-veryPeri" key={item.heroSetTitle}>
                                    <div className={`flex p-4 w-auto list-none justify-center flex-wrap gap-4`}>
                                        <Link href={`/all-sets/${slugify(item.heroSetTitle)}`} className='img flex items-center'>
                                            <Image src={item.set.HeroImg[0].link}
                                                height={125}
                                                width={125}
                                                className='rounded-md animate-fadeOut h-[120px] p-1'
                                                alt='order-picture'
                                            >
                                            </Image>
                                        </Link>
                                        <div className='info flex flex-col justify-center ml-4 flex-grow'>
                                            <div className='flex justify-between items-center my-2'>
                                                <p>{item.heroSetTitle}</p>
                                            </div>
                                            <p className="my-2">{"Is Delivered: "}
                                                <span className="bg-slate-200">
                                                    {`${item.isDelivered.valueOf()}`}
                                                </span>
                                            </p>
                                            <p className="my-2">{"Order ID: "}
                                                <span className="bg-slate-200">
                                                    {item.orderId}
                                                </span>
                                            </p>
                                            <p>{"steam ID: "}
                                                <span className="bg-slate-200">
                                                    {item.buyerSteamId}
                                                </span>
                                            </p>
                                            <div className='mt-1 pt-1 flex items-end text-left justify-end my-2'>
                                                <span>{"Purchase Date: "}</span><span className="bg-slate-200">{formattedDate}</span>
                                            </div>
                                            <div className='mt-1 pt-1 flex items-end text-left justify-end my-2'>
                                                <span>{"Buyer: "}</span><span className="bg-slate-200">{item.buyerEmail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="menu-items px-1 py-3 border-b border-b-veryPeri"> No Orders were found! </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default AdminDashboard