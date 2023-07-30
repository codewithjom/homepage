'use client'

import { motion } from 'framer-motion'
import Introduction from './Introduction'
import LookingForSomethign from './LookingForSomething'
import LatestPost from './LatestPosts'
import Footer from './Footer'

export default function Homepage() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className='text-[#CDD6F4]'>
        <div className='mx-5'>
          <Introduction />
          <LookingForSomethign />
          <LatestPost />
          <Footer />
        </div>
      </div>
    </motion.div>
  )
}
