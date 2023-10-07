import { cache } from 'react'
import prisma from './prisma'
import { setType, setTypeArray } from 'types'
import { deslugify } from './textModifer'

export const revalidate = 7200 // revalidate the data at most every hour

export const getSets = cache(async () => {
    const allSets: setTypeArray | null = await prisma.heroSet.findMany({
        include: {
            HeroImg: true,
            category: true
        }
    })
    return allSets
})

export const getSet = cache(async (title: string) => {
    const set: setType | null = await prisma.heroSet.findUnique({
        where: {
            title: deslugify(title)
        },
        include: {
            HeroImg: true,
            category: true
        }
    })
    return set
})


export const findSets = async (q: string): Promise<setTypeArray> => {
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
