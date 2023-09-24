import Breadcrumb from "@/components/layout/Breadcrumb";
import AllSetsTemplate from "@/components/templates/AllSetsTemplate";

import type { Metadata } from "next";

export default async function AllSets() {

    return (
        <>
            <Breadcrumb home={true} allSets={true} />
            <AllSetsTemplate />
        </>
    )
}

export const metadata: Metadata = {
    title: 'All Sets',
}