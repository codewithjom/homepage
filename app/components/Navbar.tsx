'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div>
        <nav className='w-full bg-[#181825] lg:p-10'>
          <div className='justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8'>
            <div>
              <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                {/* LOGO */}
                <Link href='/'>
                  <h2 className={`text-2xl text-cyan-600 font-bold ${montserrat.className}`}>Jom Dollesin</h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className='md:hidden'>
                  <button
                    className='p-2 text-gray-700 outline-none rounded-md focus:border-gray-400 focus:border'
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src='/close.svg' width={30} height={30} alt='logo' />
                    ) : (
                      <Image
                        src='/hamburger.svg'
                        width={30}
                        height={30}
                        alt='logo'
                        className='focus:border-none active:border-none'
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className='h-screen md:h-auto text-[#CDD6F4] items-center justify-center md:flex text-2xl lg:text-base'>
                  <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                    <Link href='https://booknotes-cwj.vercel.app/' onClick={() => setNavbar(!navbar)}>
                      Book notes
                    </Link>
                  </li>
                  <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                    <Link href='/blog' onClick={() => setNavbar(!navbar)}>
                      Blog
                    </Link>
                  </li>
                  <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                    <Link href='/projects' onClick={() => setNavbar(!navbar)}>
                      Projects
                    </Link>
                  </li>
                  <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                    <Link href='/uses' onClick={() => setNavbar(!navbar)}>
                      Uses
                    </Link>
                  </li>
                  <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                    <Link href='/contact' onClick={() => setNavbar(!navbar)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='hidden md:block'>
              <ul className='flex space-x-8'>
                <li>
                  <Link href='https://github.com/codewithjom' target='_blank'>
                    <Image src='/github.svg' alt='github logo' width={30} height={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://drive.google.com/file/d/1uF_FfMuugDIMknUgVRDCvCgUqVuu4_5F/view?usp=sharing'
                    className='text-[#CDD6F4] px-8 py-4 border border-[#CDD6F4] rounded-lg hover:bg-[#cdd6f433]'
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </motion.div>
  )
}
