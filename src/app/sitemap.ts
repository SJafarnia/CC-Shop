type Sitemap = Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
    priority?: number
}>

export default function sitemap(): Sitemap {
    return [
        {
            url: `${process.env.SERVER_PATH}/all-sets`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ]
}