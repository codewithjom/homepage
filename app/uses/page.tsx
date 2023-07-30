'use client'

import { motion } from 'framer-motion'
import Uses from './components/Uses'
import Basics from './components/Basics'
import Applications from './components/Applications'
import Website from './components/Website'
import Hardware from './components/Hardware'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className='mx-5 text-[#CDD6F4]'>
        <Uses />
        <Basics />
        <Applications />
        <Website />
        <Hardware />
        <Footer />
      </div>
    </motion.div>
  )
}
