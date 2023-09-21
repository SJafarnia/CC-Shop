import Image from "next/image";
import Link from "next/link";
import { slugify } from "@utils/slugify"

interface data {
    alt: string,
    src: string,
    hero: string,
    setName: string,
    price: number,
    title: string
}

export default function Card({ src, alt, hero, setName, price, title }: data) {
    return (
        <Link
            href={`/all-sets/${slugify(title)}`}
            className="mx-2 relative animate-fadeOut mt-6 flex flex-col justify-between rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <Image
                className="rounded-t-lg transition-opacity h-[211.55px] w-full"
                src={src}
                alt={alt}
                width={317}
                height={211}
            // layout="responsive"
            />
            <div className="p px-8 py-6 text-center">
                <h5
                    className="mb-2 text-lg/10 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {hero}
                </h5>
                <p className="mb-4 text-base font-medium text-neutral-600 dark:text-neutral-200">
                    {setName}
                </p>
                <p className="mb-4 text-lg">
                    $ {price}.00
                </p>

            </div>
            <button
                className="text-white group duration-300 transform hover:text-veryPeri hover:bg-white hover:text-base w-full ease-in-out bg-veryPeri focus:ring-4 font-medium rounded-b-md text-sm px-5 py-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto group-hover:scale-150 ease-in-out duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

            </button>
        </Link>
    )
}