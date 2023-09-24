import { setTypeArray } from "types";
import ListGrid from "./list/ListGrid";
import prisma from "@utils/prisma";
import { qType } from "@/components/templates/SearchTemplate";
import SearchBar from "@/components/layout/modules/SearchBar";


export const fetchDB = async (q: string): Promise<setTypeArray> => {

    const data = await prisma.heroSet.findMany({
        where: {
            OR: [
                {
                    hero: {
                        contains: q
                    },
                },
                {
                    title: {
                        contains: q
                    }
                },
                {
                    category: {
                        title: {
                            contains: q
                        }
                    }
                },
                {
                    year: { contains: q }
                }
            ],
        },
        include: {
            HeroImg: true,
            category: true
        }

    })

    return data

}

export default async function SearchResult({ q }: qType) {

    const data: setTypeArray | null = await fetchDB(q)

    return (
        <div className="py-20">
            <div className="">
                <h3 className="t text-4xl text-center mb-12">
                    Search Results for "{q}"
                </h3>
            </div>
            <div className="w w-2/3 mx-auto mb-5">
                <SearchBar />
            </div>
            <ListGrid data={data} />
        </div>
    )
}

