'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Book from './components/Book'
import Footer from '../components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Books() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className='mx-5 text-[#CDD6F4]'>
        <div className='my-10 lg:max-w-3xl lg:mx-auto'>
          <h1 className={`font-bold text-2xl ${montserrat.className}`}>Books</h1>
          <p className='mt-10'>
            In the huge world of writing, I'm drawn to a wide range of genres that challenge and expand my mind. My
            reading has given me a wide range of information and understanding, from the fascinating world of technology
            to the deep insights of religious and non-fiction books.
          </p>
        </div>
        <div>
          <Book />
          <Footer />
        </div>
      </div>
    </motion.div>
  )
}
