import SingleSetTemplate from '@/components/templates/SingleSetTemplate'
import prisma from '@utils/prisma'
import { notFound } from 'next/navigation'
import { slugify, deslugify } from "@utils/textModifer"
import { Metadata, ResolvingMetadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { getSet } from '@utils/queries'

export const dynamicParams = true

async function singleSet({ params }: { params: { setTitle: string } }) {

    const set = await getSet(deslugify(params.setTitle))

    if (!set) {
        return notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: set.title,
        description: `${set.hero} ${set.category?.title}`,
        "brand": {
            "@type": "Brand",
            "name": "CC Shop"
        },
        // "url": "http://example.com/path/to/product-page"
    }

    return (
        <>
            <Breadcrumb allSets={true} singleSet={set.title} />
            <SingleSetTemplate {...set} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
        description: "Dota 2 Collector's Cache Shop",
    }
}


export default singleSet
