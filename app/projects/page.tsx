import projects from './data/projects'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Footer from '../components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Projects() {
  return (
    <div className='mx-5 text-[#CDD6F4]'>
      <div className='mt-16 lg:max-w-3xl lg:mx-auto'>
        {projects.map(data => (
          <div className='border border-gray-800 rounded-lg p-4 mb-10 lg:p-8'>
            <h1 className={`font-bold text-2xl ${montserrat.className}`}>{data.title}</h1>
            <div className='mt-5'>
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
        ))}
      </div>
      <Footer />
    </div>
  )
}
