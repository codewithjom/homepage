'use client'

import { motion } from 'framer-motion'
import projects from './data/projects'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Footer from '../components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className='mx-5 text-[#CDD6F4]'>
        <div className='mt-16 lg:max-w-3xl lg:mx-auto'>
          {projects.map(data => (
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className='border border-gray-800 rounded-lg p-4 mb-10 lg:p-8'>
                <h1 className={`font-bold text-2xl lg:text-left ${montserrat.className}`}>{data.title}</h1>
                <div className='mt-5 lg:text-left'>
                  <p>{data.description}</p>
                </div>
                <div className='mt-10 flex justify-center items-center lg:scale-125'>
                  <Image src={data.imgURL} alt='' width={300} height={300} />
                </div>
                <div className='mt-10'>
                  <Link href={data.link}>
                    <button className='border border-green-500 bg-green-800 px-4 py-2 rounded-lg'>Launch</button>
                  </Link>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}
