import { slugify } from "@utils/textModifer"
import prisma from '@utils/prisma'
import EditSet from "@/components/modules/Sets/editSet/EditSet";
import { getSet } from "@utils/queries";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { setTitle: string } }) {
    const set = await getSet(params.setTitle)
    if (!set) {
        return notFound()
    }

    return (
        <EditSet {...set} />
    )
}

export async function generateStaticParams() {
    const sets = await prisma.heroSet.findMany()
    return sets.map((set: any) => ({
        setTitle: slugify(set.title),
    }))
}



