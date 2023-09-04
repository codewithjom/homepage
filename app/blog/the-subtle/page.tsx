'use client'

import { motion } from 'framer-motion'
import TheSubtle from '../../contents/thesubtle.mdx'
import Footer from '@/app/components/Footer'

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div>
        <div className='mx-5 my-10 lg:max-w-3xl lg:mx-auto'>
          <article className='prose max-w-none'>
            <TheSubtle />
          </article>
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}
