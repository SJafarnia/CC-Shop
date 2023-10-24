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

export type cartItemsType = {
    cartItems: {
        hero: string,
        title: string,
        price: number,
        img: string
    }[]
}

export interface formType {
    [key: string]: string | number | null | undefined,
    title: string,
    hero: string,
    price: number | null,
    year: string,
    total: number,
    category: string | null | undefined,
    description: string | undefined | null,
}

export type soldItemType = {
    buyerEmail: string,
    dateDelivered: Date | undefined,
    dateSold: string,
    heroSetTitle: string,
    id: string,
    isDelivered: boolean,
    order: {},
    orderId: string,
    set: setType,
    buyerSteamId: string | undefined,
}