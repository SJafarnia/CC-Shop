export type setType = {
    id: string,
    title: string,
    hero: string,
    price: number,
    year: string,
    total: number,
    isAvailable: boolean | null,
    description: string | null,
    categoryId: string | null,
    HeroImg: {
        id: string,
        link: string,
        setId: string | null
    }[],
    category: {
        title: string,
        id: string
    } | null
}
export type setTypeArray = setType[]

export type credentialsType = {
    email: string,
    password: string
}