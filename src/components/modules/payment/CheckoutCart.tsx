"use client"
import { remCartItem, selectCartItems } from '@redux/features/CartItemsSlice'
import Image from 'next/image'
import Link from 'next/link';
import { slugify, truncateText } from '@utils/textModifer';
import { useDispatch, useSelector } from 'react-redux'
import { cartItemsType } from 'types';


function CheckoutCart({ setState }: any) {
    const dispatch = useDispatch();
    const cartState: cartItemsType | null = useSelector(selectCartItems);
    const subTotal = cartState?.cartItems?.reduce((prev, cur) => {
        return prev + (+cur.price);
    }, 0);

    const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setState(name, value)
    }

    return (
        <div className='flex flex-col h-full justify-between mt-10'>
            <div className={`flex-col flex flex-grow`}>
                {cartState?.cartItems && cartState.cartItems.map((item: any) => {
                    return (
                        <div className="menu-items px-1 py-3 border-b border-b-veryPeri" key={item.title}>
                            <div className={`flex p-4 w-auto list-none justify-stretch`}>
                                <Link href={`/all-sets/${slugify(item.title)}`} className='img'>
                                    <Image src={item.img as string}
                                        height={85}
                                        width={97}
                                        className='rounded-md animate-fadeOut h-[85px] ml-2'
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
                <div className='p-4'>
                    <label htmlFor="message" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Special instructions for seller</label>
                    <textarea required id="message" name='steamId' onChange={inputHandler} rows={4} className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-veryPeri focus:ring-blue-500 focus:border-veryPeri" placeholder="Your steam id or link"></textarea>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart