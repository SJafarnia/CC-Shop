import Image from "next/image";

export default function HomeTemplate() {
    return (
        <div className="mx-auto mt-28 mb-28 text-veryPeri text-center">
            <h2 className="text-5xl text-lightCoral p-4">
                {"Collector's Cache Gift Shop"}
            </h2>
            <div className="hero-grid p-4 md:grid gap-6 flex-col align-middle justify-center items-center mt-20 text-center text-xl font-semibold">
                <span className="hero-grid-1 my-auto p-4">
                    Source For Out of Market<span className="text-livingCoral">{" Collector's Cache"}</span>
                </span>
                <Image className="hero-grid-2 md:my-2 mx-auto rounded-md w-[666.67px] h-[374.63px]" src="/wallpapers/1291021.jpg" width={1080} height={920} alt="collector's chache"></Image>
                <Image className="hero-grid-3 md:my-2 mx-auto rounded-md w-[666.67px] h-[374.63px]" src="/wallpapers/3221051.jpg" width={1080} height={920} alt="collector's chache"></Image>
                <span className="hero-grid-4 my-auto p-4">
                    We give you a chance to acquire <br></br> Dota 2<span className="text-livingCoral">{" Collector's Cache "}</span>{"sets you've missed to obtain"}
                </span>
            </div>
        </div>
    )
}