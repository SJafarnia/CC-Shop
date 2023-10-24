import { Montserrat, Roboto_Mono, Roboto } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ["400", "700"],
    display: 'swap',
})

export const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ['latin'],
    display: 'swap'
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})