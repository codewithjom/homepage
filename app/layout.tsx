import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Jom Dollesin',
  description: 'Official website of Jom Dollesin'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body className='bg-[#181825]'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
