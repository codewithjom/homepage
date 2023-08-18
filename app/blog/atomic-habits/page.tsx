'use client'

import { motion } from 'framer-motion'
import AtomicHabits from '../../contents/atomichabits.mdx'

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div>
        <div className='mx-5 my-10 lg:max-w-3xl lg:mx-auto'>
          <article className='prose max-w-none'>
            <AtomicHabits />
          </article>
        </div>
      </div>
    </motion.div>
  )
}
