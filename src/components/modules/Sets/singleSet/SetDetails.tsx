import { deslugify } from "@utils/textModifer"
import Image from 'next/image'
import Link from 'next/link'
import { setType } from 'types'
import AddToCart from './AddToCart'

function SetDetails(props: setType) {

    const { title, hero, HeroImg, price, category } = props

    return (
        <div className='flex p-5 my-20'>
            <div className='imagesection w-1/2'>
                <div className='h-full'>
                    <Image src={HeroImg[0].link} width={1200} height={1200} alt='' className='w-full h-[435px] rounded-md' />
                </div>
            </div>
            <div className='infoSection w-1/2'>
                <div className='mt-8 pl-10 flex justify-around flex-col h-full'>
                    <div className='header mb-6 pl-1 text-4xl'>{hero} - {title} {category?.title}</div>
                    <div className='price mb-6 text-xl'>${price}.00</div>
                    <AddToCart {...props} />
                    <div className='cats mb-4 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        <p className='p-1 font-medium'>Category </p>
                        <Link href={`/search?q=${deslugify(category?.title)}`}>
                            <p className='b bg-violet-100 rounded-sm text-gray-600 p-2 text-sm mx-1'>{category?.title}</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SetDetails