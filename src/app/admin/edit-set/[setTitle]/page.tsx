import { deslugify, slugify } from "@utils/textModifer"
import EditSet from "@/components/modules/Sets/editSet/EditSet";
import { getSet, getSets } from "@utils/queries";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { setTitle: string } }) {
    const set = await getSet(deslugify(params.setTitle))
    if (!set) {
        return notFound()
    }

    return (
        <EditSet {...set} />
    )
}

export async function generateStaticParams() {
    const sets = await getSets()
    return sets.map((set: any) => ({
        setTitle: slugify(set.title),
    }))
}



