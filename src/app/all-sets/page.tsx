import Breadcrumb from "@/components/layout/Breadcrumb";
import AllSetsTemplate from "@/components/templates/AllSetsTemplate";
import { getSets } from "@utils/queries";
import type { Metadata } from "next";
import { setTypeArray } from "types";

export default async function AllSets() {
    const allSets: setTypeArray | null = await getSets()

    return (
        <>
            <Breadcrumb allSets={true} />
            <AllSetsTemplate allSets={allSets} />
        </>
    )
}

export const metadata: Metadata = {
    title: 'All Sets',
}