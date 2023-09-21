import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
    const swiper = useSwiper()
    return (
        <div className='swiper-nav-btns'>
            <button className='absolute top-[55%] left-4 opacity-0 group-hover:opacity-100 transition-opacity text-black rounded-sm group-hover:bg-[#F5F5F5] p-2 z-50 cursor-pointer hover:scale-105 ease-in-out duration-300' onClick={() => swiper.slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button className='absolute top-[55%] right-4 opacity-0 group-hover:opacity-100 transition-opacity text-black rounded-sm group-hover:bg-[#F5F5F5] p-2 z-50 cursor-pointer hover:scale-105 ease-in-out duration-300' onClick={() => swiper.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 bg-red">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    )
}