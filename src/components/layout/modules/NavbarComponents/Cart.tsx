"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { remCartItem, selectCartItems } from '@redux/features/CartItemsSlice'
import { slugify, truncateText } from '@utils/textModifer';
import { cartItemsType } from 'types';


function Cart() {
    const cartState: cartItemsType | null = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const [showCart, setshowCart] = useState("")
    const subTotal = cartState?.cartItems?.reduce((prev, cur) => {
        return prev + (+cur.price)
    }, 0)

    useEffect(() => {
        if (showCart == "-translate-x-[630px]") {
            document.body.classList.add('popup-menu-open');
        } else {
            document.body.classList.remove('popup-menu-open');
        }
        return () => {
            document.body.classList.remove('popup-menu-open');
        }
    }, [showCart]);

    return (
        <>
            <div className={`menu-list text-center items-center z-40 cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setshowCart("-translate-x-[630px]")} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
            <div className={`${showCart} duration-500 ease-in-out bg-slate-100 fixed top-0 bottom-0 -right-[650px] xs:w-full sm:w-full md:w-2/4 lg:w-1/4 mr-4 z-50 h-full text-black border-b border-solid border-b-[#1A37601A]`}>
                <header className={` rounded-md border-solid border-[#EAEAEA] h-full sticky w-full z-10`}>
                    <section className={`flex flex-col h-full text-black mx-auto relative justify-start text-center`}>
                        <div className='flex flex-col h-full justify-between'>
                            <div className={`flex-col flex flex-grow`}>
                                <div className='flex justify-between items-center p-4 border-b border-b-veryPeri '>
                                    <div className="logo mr-8 p-2 ">
                                        <div className=' flex items-center flex-row'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <span className='ml-2 text-lg text-center'>Your Cart({cartState?.cartItems.length})</span>
                                        </div>
                                        {/* <Image src="" alt="" className="h-auto w-auto" width={146} height={146}></Image> */}
                                    </div>
                                    <svg onClick={() => setshowCart("translate-x-[630px]")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`text-slate-500 w-6 h-6 cursor-pointer`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                {cartState?.cartItems && cartState.cartItems.map((item: any) => {
                                    return (
                                        <div className="menu-items px-1 py-3 border-b border-b-veryPeri">
                                            <div className={`flex p-4 w-auto list-none justify-stretch`}>
                                                <Link href={`/all-sets/${slugify(item.title)}`} className='img'>
                                                    <Image src={item.img as string}
                                                        height={85}
                                                        width={97}
                                                        className='rounded-md h-[85px] ml-2'
                                                        alt='order-picture'
                                                    >
                                                    </Image>
                                                </Link>
                                                <div className='info flex flex-col justify-center ml-4 flex-grow'>
                                                    <div className='flex justify-between items-center'>
                                                        <Link href={`/all-sets/${slugify(item.title)}`}>
                                                            <div className='title'>
                                                                {item.hero} - {truncateText(item.title, 12)}
                                                            </div>
                                                        </Link>
                                                        <button className='ml-2' onClick={() => dispatch(remCartItem({ title: item.title }))}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className='mt-1 pt-1 flex justify-end'>
                                                        ${item.price}.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className='flex justify-between items-center p-5 border-b border-b-veryPeri'>
                                    <span className='ml-2 text-lg text-center'>Subtotal</span>
                                    <span className='ml-2 text-lg text-center'>${subTotal}.00</span>
                                </div>
                            </div>
                            <div className='p-4'>
                                <button className='p-4 w-full rounded-md bg-veryPeri text-white'>Checkout</button>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false })