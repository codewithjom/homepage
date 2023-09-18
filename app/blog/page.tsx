'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Footer from '../components/Footer'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Blogs() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div>
        <div className='mx-5 my-10 lg:max-w-3xl lg:mx-auto text-[#CDD6F4]'>
          <h1 className={`text-2xl font-bold ${montserrat.className}`}>Blogs</h1>
          <p className='mt-10'>
            Here you'll find links to the best pieces I've written about habits, productivity, and spirituality. Rather
            than keeping my thoughts to myself, I wanted to hear what others had to say about the topics I covered,
            which is what inspired me to start writing pieces like this.
          </p>
          <p className='mt-10'>
            My favorite novels and other reading recommendations are just a couple of the engaging topics you'll find
            here. My reading has provided the inspiration for the majority of the themes. Is it time to jump in? Use the
            categories below to peruse my finest works.
          </p>
          <div className='mt-10'>
            <h1 className={`text-xl font-bold ${montserrat.className}`}>Habits</h1>
            <div className='mt-4'>
              <ul className='list-disc mx-10'>
                <li>
                  <Link href='/blog/atomic-habits' className='text-[#FAB387]'>
                    The Atomic Habits: Why You Need to Read It
                  </Link>
                </li>
                <li>
                  <Link href='/blog/the-subtle' className='text-[#FAB387]'>
                    Making the most of life by not caring a f*ck
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-10'>
            <h1 className={`text-xl font-bold ${montserrat.className}`}>Sermon</h1>
            <div className='mt-4'>
              <ul className='list-disc mx-10'>
                <li>
                  <Link href='#' className='text-[#FAB387]'>
                    Scriptural Sustenance: Cultivating a Habit of Daily Bible Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}
