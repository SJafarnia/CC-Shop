import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-col text-sm justify-between">
            <div className="navItems flex w-2/4 flex-col mb-2">
                <div className="p-1 ml-2 mb-2">
                    <Link href="/" className="">Home Page</Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/all-sets">
                        <span>{"All Collector's Caches"}</span>
                    </Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/about" className="">About Us</Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/privacy-policy" className="">Privacy Policy</Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/" className="">Terms of Service</Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/refund-policy" className="">Retun & Refund Policy</Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/shipping-policy" className="">Shipping Policy</Link>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <Link href="/faqs" className="">FAQs</Link>
                </div>
            </div>
        </div>
    )
}