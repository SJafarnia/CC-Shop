import Providers from "@redux/Providers";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";



export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <Providers>
            <Navbar />
            <div className="px-2 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
                {children}
            </div>
            <Features />
            <Footer />
        </Providers>

    )
}