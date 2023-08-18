import { Montserrat } from 'next/font/google'
import Image from 'next/image'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Uses() {
  return (
    <div>
      <div className='my-10'>
        <div className='lg:max-w-3xl lg:mx-auto'>
          <h1 className={`text-2xl font-bold ${montserrat.className}`}>Uses</h1>
          <p className='italic mt-4 text-[#7F849C]'>Last updated July 29, 2023</p>
          <div className='mt-10'>
            <p className='text-justify'>
              When it comes to my development journey, <b>Linux</b> is supreme. Because it's open source, I have
              complete flexibility to experiment with it. I am able to automate processes, solve problems, and get a
              firm grasp on computing thanks to the command-line interface. The reliability and safety of Linux make it
              my go-to operating system, while the platform's many distributions and helpful user base are constant
              sources of creativity and innovation. Linux feeds my insatiable appetite for programming because of its
              unparalleled efficiency and ability to maximize available resources.
            </p>
          </div>
          <div className='mt-10 lg:hidden'>
            <Image src={'/desk.png'} alt='Desktop' height={500} width={500} className='object-cover rounded-lg' />
            <p className='text-xs text-center italic mt-4 text-[#7F849C]'>
              My cool computer desk! Which is just the best way I've found to get my work done.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='mt-20 hidden lg:block lg:max-w-4xl lg:mx-auto lg:scale-110'>
            <img src='/desk.png' alt='Desktop' height='600' width='800' className='object-cover rounded-lg' />
            <p className='text-sm text-center italic mt-4 text-[#7F849C]'>
              My cool computer desk! Which is just the best way I've found to get my work done.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
