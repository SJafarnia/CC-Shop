export default function Nav() {
    return (
        <div className="flex flex-col text-sm justify-between">
            <div className="navItems flex w-2/4 flex-col mb-2">
                <div className="p-1 ml-2 mb-2">
                    <a href="/" className="">Home Page</a>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <a href="/">
                        <span>{"All Collector's Caches"}</span>
                    </a>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <a href="/" className="">About Us</a>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <a href="/" className="">Terms of Service</a>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <a href="/" className="">Retun & Refund Policy</a>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <a href="/" className="">Shipping Policy</a>
                </div>
                <div className="p-1 ml-2 mb-2">
                    <a href="/" className="">FAQs</a>
                </div>
            </div>
        </div>
    )
}