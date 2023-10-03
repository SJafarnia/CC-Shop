import Image from "next/image";
import Link from "next/link";
import { slugify } from "@utils/textModifer"
import AddToCart from "./AddToCart";

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
        <div>
            <Link
                href={`/all-sets/${slugify(title)}`}
                className="mx-2 relative animate-fadeOut mt-6 flex flex-col justify-between rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                <Image
                    className="rounded-t-lg transition-opacity h-[352.55px] w-full"
                    src={src}
                    alt={alt}
                    width={317}
                    height={211}
                // layout="responsive"
                />
            </Link>
            <div className="p px-8 py-6 text-center">
                <Link href={`/search?q=${hero}`}>
                    <h5
                        className="mb-2 text-lg/10 font-medium leading-tight text-neutral-800">
                        {hero}
                    </h5>
                </Link>
                <Link href={`/all-sets/${slugify(title)}`}>
                    <p className="mb-4 text-base font-medium text-neutral-600">
                        {setName}
                    </p>
                </Link>
                <p className="mb-4 text-lg">
                    $ {price}.00
                </p>
            </div>
            <AddToCart hero={hero} title={title} price={price} img={src} />
        </div>
    )
}