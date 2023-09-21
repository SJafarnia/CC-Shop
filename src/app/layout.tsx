import Navbar from '@/components/layout/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import "tw-elements/dist/css/tw-elements.min.css";


import Providers from "@redux/Providers"

const roboto = Poppins({ weight: ["300", "400", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Providers> */}
        <Layout>
          {children}
        </Layout>
        {/* </Providers> */}
      </body>
    </html>
  )
}
