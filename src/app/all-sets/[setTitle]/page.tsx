import SingleSetTemplate from '@/components/templates/SingleSetTemplate'
import prisma from '@utils/prisma'
import { notFound } from 'next/navigation'
import React from 'react'
import { setType } from 'types'
import { slugify, deslugify } from "@utils/textModifer"
import { Metadata, ResolvingMetadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const dynamicParams = true
export const revalidate = 3600



async function singleSet({ params }: { params: { setTitle: string } }) {

    const set: setType | null = await prisma.heroSet.findUnique({
        where: {
            title: deslugify(params.setTitle)
        },
        include: {
            HeroImg: true,
            category: true
        }
    })

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
    // return [{ setTitle: "grim" }]
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
