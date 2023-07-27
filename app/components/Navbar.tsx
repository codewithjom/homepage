'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div>
      <nav className='w-full bg-[#181825]'>
        <div className='justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8'>
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
              <ul className='h-screen md:h-auto items-center justify-center md:flex text-2xl lg:text-base'>
                <li className='text-white py-2 md:px-6 text-center underline hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                  <Link href='#blogs' onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className='text-white py-2 px-6 text-center underline hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                  <Link href='#uses' onClick={() => setNavbar(!navbar)}>
                    Uses
                  </Link>
                </li>
                <li className='text-white py-2 px-6 text-center underline hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                  <Link href='#links' onClick={() => setNavbar(!navbar)}>
                    Links
                  </Link>
                </li>
                <li className='text-white py-2 px-6 text-center underline hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                  <Link href='#contact' onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden md:block'>
            <Image src='/github.svg' alt='github logo' width={30} height={30} />
          </div>
        </div>
      </nav>
    </div>
  )
}
