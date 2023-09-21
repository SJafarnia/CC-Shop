import { setTypeArray } from "types";
import ListGrid from "./list/ListGrid";
import Paginator from "./pagination/Paginator";
import prisma from "@utils/prisma";


export const fetchDB = async () => {
    "use server"
    const data = await prisma.heroSet.findMany({
        include: {
            HeroImg: true,
            category: true
        }
    })
    return data
}

export default async function AllSetsList() {

    const data: setTypeArray | null = await fetchDB()

    return (
        <div className="py-20">
            <ListGrid data={data} />
            {/* <Paginator /> */}
        </div>
    )
}

