// NOTE: This is a template, use this if needed!

'use client'

import { motion } from 'framer-motion'

// add your markdown file here
// import Blog from 'path/to/the/markdown/file.mdx'

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div>
        <div className='mx-5 my-10 lg:max-w-3xl lg:mx-auto'>
          <article className='prose max-w-none'>{/** Insert here <Blog/> **/}</article>
        </div>
      </div>
    </motion.div>
  )
}
