import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

import Footer from './_components/Footer'
import Header from './_components/Header'
import MobileHeader from './_components/MobileHeader'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haneen Khan | Sex and Intimacy Coach',
  description:
    'Coaching and group programmes to help you reconnect to the free and shameless sexual being you are. For life.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-stone-50 ${openSans.className}`}>
        <div className="flex min-h-screen flex-col">
          <div className="absolute hidden w-full md:block">
            <Header />
          </div>
          <div className="block md:hidden">
            <MobileHeader />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
