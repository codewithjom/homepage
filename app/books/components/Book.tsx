import { motion } from 'framer-motion'
import Image from 'next/image'
import readBooks from './data/readBooks'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Book() {
  return (
    <div className='lg:max-w-3xl lg:mx-auto'>
      <p>
        It's possible that you're asking whether or not I'm simultaneously reading two or three books while I read. The
        answer is no; I read books wherever I feel most at ease. There are some spiritual books that I read first thing
        in the morning as part of my devotional, and the other books I read only when I have spare time.
      </p>
      <div className='mt-10'>
        <h1 className={`font-bold text-2xl ${montserrat.className}`}>Currently, I am reading the following:</h1>
        <div className='flex flex-wrap justify-center items-center mx-auto gap-3 mt-10'>
          {readBooks.map(data => {
            if (data.status === 'Reading') {
              return (
                <div key={data.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-full'>
                    <div className='flex justify-center'>
                      <Image src={data.image} alt='image' width={100} height={100} />
                    </div>
                  </motion.button>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
      <div className='mt-10'>
        <h1 className={`font-bold text-2xl ${montserrat.className}`}>Next up on my reading list</h1>
        <div className='flex flex-wrap justify-center items-center mx-auto gap-3 mt-10'>
          {readBooks.map(data => {
            if (data.status === 'Next') {
              return (
                <div key={data.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-full'>
                    <div className='flex justify-center'>
                      <Image src={data.image} alt='image' width={100} height={100} />
                    </div>
                  </motion.button>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
      <div className='mt-10'>
        <h1 className={`font-bold text-2xl ${montserrat.className}`}>I have read these books.</h1>
        <div className='flex flex-wrap justify-center items-center mx-auto gap-3 mt-10'>
          {readBooks.map(data => {
            if (data.status === 'Done') {
              return (
                <div key={data.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-full'>
                    <div className='flex justify-center'>
                      <Image src={data.image} alt='image' width={100} height={100} />
                    </div>
                  </motion.button>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
