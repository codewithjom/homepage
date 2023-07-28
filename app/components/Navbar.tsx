'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className='w-full bg-[#181825] lg:p-10'>
        <div className='justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO */}
              <Link href='/'>
                <h2 className='text-2xl text-cyan-600 font-bold '>Codewithjom</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
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
                  <Link href='#projects' onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                  <Link href='#blogs' onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                  <Link href='#uses' onClick={() => setNavbar(!navbar)}>
                    Uses
                  </Link>
                </li>
                <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                  <Link href='#links' onClick={() => setNavbar(!navbar)}>
                    Links
                  </Link>
                </li>
                <li className='py-2 px-6 text-center underline md:hover:text-[#FAB387] md:hover:bg-transparent'>
                  <Link href='#contact' onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden md:block'>
            <ul className='flex space-x-8'>
              <li>
                <Image src='/github.svg' alt='github logo' width={30} height={30} />
              </li>
              <li>
                <Link
                  href='#'
                  className='text-[#CDD6F4] px-8 py-4 border border-[#FAB387] rounded-lg hover:bg-[#fab38755]'
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
