"use client"
import { useDispatch } from 'react-redux'
import { addCartItem } from '@redux/features/CartItemsSlice'


function AddToCart({ title, hero, img, price }: { title: string, hero: string, img: string, price: number }) {
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => dispatch(addCartItem({ title, img, hero, price }))}
            className="text-white group duration-300 transform hover:text-veryPeri hover:bg-white hover:text-base w-full ease-in-out bg-veryPeri focus:ring-4 font-medium rounded-b-md text-sm px-5 py-3 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto group-hover:scale-150 ease-in-out duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        </button>
    )
}

export default AddToCart