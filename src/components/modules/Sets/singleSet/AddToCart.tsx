"use client"
import { useDispatch } from 'react-redux'
import { addCartItem } from '@redux/features/CartItemsSlice'
import { setType } from 'types'
import Swal from "sweetalert2"

function AddToCart(props: setType) {
    const dispatch = useDispatch();
    const { title, hero, HeroImg, price } = props;

    const clickHandler = () => {
        dispatch(addCartItem({ title, img: HeroImg[0].link, hero, price }));
        Swal.fire({
            position: 'center',
            color: "rgb(102 103 171 / var(--tw-text-opacity))",
            icon: 'success',
            title: `${hero} - ${title} has been added to your cart!`,
            showConfirmButton: false,
            timer: 2500
        })
    }

    return (
        <button
            className='mb-6 w-full bg-veryPeri text-center rounded-sm py-4 flex flex-wrap text-white justify-center items-center'
            onClick={clickHandler}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            ADD TO CART
        </button>
    )
}

export default AddToCart