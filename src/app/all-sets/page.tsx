import AllSetsTemplate from "@/components/templates/AllSetsTemplate";
import type { Metadata } from "next";

export default async function AllSets() {

    return (
        <AllSetsTemplate />
    )
}

export const metadata: Metadata = {
    title: 'All Sets',
}