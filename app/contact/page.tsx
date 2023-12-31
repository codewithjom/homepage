'use client'

import { motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Footer from '../components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className='mx-5 text-[#CDD6F4]'>
        <div className='container my-10 mx-auto md:px-6'>
          <section className='mb-32'>
            <div className='flex flex-wrap'>
              <div className='mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'>
                <h2 className={`mb-6 text-3xl font-bold ${montserrat.className}`}>Contact</h2>
                <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
                  Unlocking the boundless possibilities of code, I embrace the art of programming with a passion that
                  drives me forward. Whether crafting elegant algorithms or solving complex puzzles, I find joy in every
                  line I write. As a programmer, I am a creator, a problem-solver, and a visionary. Let's collaborate
                  and turn ideas into reality, one line at a time.
                </p>
                <p className='mb-2 text-neutral-500 dark:text-neutral-300'>Davao City, Philippines</p>
                <p className='mb-2 text-neutral-500 dark:text-neutral-300'>+639 1518 63630</p>
                <p className='mb-2 text-neutral-500 dark:text-neutral-300'>codewithjom@gmail.com</p>
              </div>
              <div className='mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'>
                <form action={'https://getform.io/f/97af6eb5-2686-472d-881b-2b453f7c0536'} method='POST'>
                  <div className='relative mb-10'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      className='w-full bg-transparent border border-gray-800 py-2 px-2 rounded-md'
                    />
                  </div>
                  <div className='relative mb-10'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='w-full bg-transparent border border-gray-800 py-2 px-2 rounded-md'
                    />
                  </div>
                  <div className='relative mb-10'>
                    <textarea
                      rows={3}
                      name='message'
                      placeholder='Message'
                      className='w-full bg-transparent border border-gray-800 py-2 px-2 rounded-md'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    data-te-ripple-init
                    data-te-ripple-color='light'
                    className='mb-6 inline-block border border-gray-800 w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                  >
                    <div className='py-2'>Send</div>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}
