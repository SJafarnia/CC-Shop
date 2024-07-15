import { cache } from 'react'
import prisma from './prisma'
import { setType, setTypeArray } from 'types'
import { deslugify } from './textModifer'

export const revalidate = 7200 // revalidate the data at most every hour

export const getSets = cache(async () => {
    // try {
    const allSets: setTypeArray | null = await prisma.heroSet.findMany({
        include: {
            HeroImg: true,
            category: true
        }
    })
    return allSets
    // } catch (err) {
    // console.log(err)
    // } finally {
    // prisma.$disconnect()
    // }
    // return null
})

export const getSet = cache(async (title: string) => {
    // try {
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
    // } catch (err) {
    // console.log(err)
    // } finally {
    // prisma.$disconnect()
    // }
})


export const findSets = async (q: string) => {
    // try {
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
    // } catch (err) {
    //     console.log(err)
    // } finally {
    //     prisma.$disconnect()
    // }
}

export const getAllOrders = async () => {
    const data = await prisma.soldItem.findMany({
        where: {
            isDelivered: false
        },
        include: {
            set: {
                select: {
                    HeroImg: true
                }
            }
        },
    })

    return data
}

export const getUserOrders = async (user: string) => {
    const data = await prisma.soldItem.findMany({
        where: {
            buyerEmail: user
        },
        include: {
            set: {
                select: {
                    HeroImg: true
                }
            }
        },
    })

    return data
}

export const getRecommended = async (title: string | undefined, selfTitle: string | undefined) => {
    const relatedPosts: setTypeArray | null = await prisma.heroSet.findMany({
        where: {
            category: {
                title
            },
            NOT: {
                title: selfTitle
            }
        },
        include: {
            HeroImg: true,
            category: true
        }
    })
    // prisma.$disconnect()
    return relatedPosts
}