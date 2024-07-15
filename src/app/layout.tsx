import './globals.css'
import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import "tw-elements/dist/css/tw-elements.min.css";
import AuthProvider from '@/components/layout/modules/AuthProvider'
import { roboto, montserrat } from './fonts'

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
      <body className={`${roboto.className} ${roboto.variable} ${montserrat.variable}`}>
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
