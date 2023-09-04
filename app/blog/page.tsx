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
            Please enjoy my many posts, where I use words as portals into the worlds of (a) Non-Fiction, (b) Spiritual
            Reflections, and (c) Technological Insights. By sharing my thoughts online, I hope to help others better
            understand the world around them, both in its material and immaterial elements. Come with me as we probe the
            unknown, ponder the spiritual glue that unites us, and untangle the knots of a technological world in
            constant flux.
          </p>
          {/** Books **/}
          <div className='mt-10'>
            <div>
              <h1 className={`text-xl font-bold ${montserrat.className}`}>Books</h1>
              <p className='mt-4'>
                The majority of these articles are composed of my reflections or my analysis of the aforementioned
                books.
              </p>
            </div>
            <div className='mt-4'>
              <ul className='list-disc mx-10'>
                <li>
                  <Link href='/blog/atomic-habits' className='text-[#FAB387]'>
                    Why you should read Atomic Habits
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
          {/** Sermon **/}
          <div className='mt-10'>
            <div>
              <h1 className={`text-xl font-bold ${montserrat.className}`}>Sermon</h1>
              <p className='mt-4'>
                My own personal sermon, including passages taken mostly from the Holy Bible is included here.
              </p>
            </div>
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
