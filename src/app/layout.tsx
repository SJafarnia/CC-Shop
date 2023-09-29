import Navbar from '@/components/layout/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import "tw-elements/dist/css/tw-elements.min.css";
import Providers from "@redux/Providers"
import AuthProvider from '@/components/layout/modules/AuthProvider'

const roboto = Poppins({ weight: ["300", "400", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CC Shop',
  description: "Dota 2 Collector's cache Shop",
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
        <AuthProvider>
          <Layout>
            {children}
          </Layout>
        </AuthProvider>
        {/* </Providers> */}
      </body>
    </html>
  )
}
