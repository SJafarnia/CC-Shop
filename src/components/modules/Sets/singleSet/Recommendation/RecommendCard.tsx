import { slugify } from "@utils/textModifer";
import Image from "next/image";
import Link from "next/link";

interface data {
    alt: string,
    src: string,
    hero: string,
    setName: string,
    price: number
}

export default function RecommendCard({ src, alt, hero, setName, price }: data) {
    return (
        <Link
            href={`/all-sets/${slugify(setName)}`}
            className="mx-2 h-full relative mt-6 flex flex-col items-stretch rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
            <>
                <Image
                    className="rounded-t-lg transition-opacity animate-fadeOut h-[352.55px] object-cover w-full"
                    src={src}
                    alt={alt}
                    width={317}
                    height={211}
                />
            </>
            <div className="p px-8 pt-6 pb-4 text-center flex justify-between flex-col">
                <h5
                    className="mb-2 text-lg font-medium leading-tight text-neutral-800">
                    {hero}
                </h5>
                <p className="mb-4 text-base font-medium text-neutral-600">
                    {setName}
                </p>
                <p className="mb-4 text-lg">
                    $ {price}.00
                </p>

            </div>

        </Link>
    )
}