import { motion } from 'framer-motion'
import Image from 'next/image'
import readBooks from './data/readBooks'

export default function ReadBooks() {
  return (
    <div className='lg:max-w-3xl lg:mx-auto'>
      <h1 className='text-2xl font-bold'>The books I read today</h1>
      <div className='mt-10 lg:grid lg:grid-cols-3 lg:gap-6'>
        {readBooks.map(data => (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div key={data.id} className='border border-gray-800 p-8'>
              <div className='flex justify-center'>
                <Image src={data.image} alt='image' width={150} height={150} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
