import SingleSetTemplate from '@/components/templates/SingleSetTemplate'
import prisma from '@utils/prisma'
import { notFound } from 'next/navigation'
import { slugify, deslugify } from "@utils/textModifer"
import { Metadata, ResolvingMetadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { getSet } from '@utils/queries'

export const dynamicParams = true

async function singleSet({ params }: { params: { setTitle: string } }) {

    const set = await getSet(params.setTitle)
    if (!set) {
        return notFound()
    }
    return (
        <>
            <Breadcrumb allSets={true} singleSet={set.title} />
            <SingleSetTemplate {...set} />
        </>
    )
}

export async function generateStaticParams() {
    const sets = await prisma.heroSet.findMany()
    return sets.map((set: any) => ({
        setTitle: slugify(set.title),
    }))
}

export async function generateMetadata({ params }: { params: { setTitle: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: deslugify(params.setTitle),
        openGraph: {
            title: params.setTitle,
            tags: "website"
        }
    }
}


export default singleSet
