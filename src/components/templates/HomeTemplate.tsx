import Image from "next/image";
import Recommended from "../modules/Sets/singleSet/Recommendation/Recommended";
import { setTypeArray } from "types";
import { getSets } from "@utils/queries";

export const dynamic = "force-dynamic"

export default async function HomeTemplate() {
    const newSets: setTypeArray | null = await getSets()

    function getRandomItems(array: setTypeArray, count: number) {
        const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array

        return shuffled.slice(0, count); // Get the first 'count' items
    }

    return (
        <div className="mx-auto mt-28 mb-28 text-veryPeri text-center">
            <h2 className="text-5xl text-lightCoral p-4">
                {"Collector's Cache Gift Shop"}
            </h2>
            <div className="hero-grid md:p-4 md:grid gap-6 flex-col align-middle justify-center items-center mt-20 text-center text-xl font-semibold">
                <span className="hero-grid-1 my-auto p-4">
                    Source For Out of Market<span className="text-livingCoral">{" Collector's Cache"}</span>
                </span>
                <Image className="hero-grid-2 md:my-2 mx-auto rounded-md w-[666.67px] max-h-[374.63px]" src="/wallpapers/1291021.jpg" width={666.67} height={374.63} alt="collector's chache"></Image>
                <Image className="hero-grid-3 md:my-2 mx-auto rounded-md w-[666.67px] max-h-[374.63px]" src="/wallpapers/3221051.jpg" width={666.67} height={374.63} alt="collector's chache"></Image>
                <span className="hero-grid-4 my-auto p-4">
                    We give you a chance to acquire <br></br>Dota 2<span className="text-livingCoral">{" Collector's Cache "}</span>{"sets you've missed to obtain"}
                </span>
            </div>
            {newSets.length > 1 && <Recommended relatedPosts={getRandomItems(newSets, 6) || []} title="Explore our sets" caption="Choose sets from various collections" />}
        </div>
    )
}