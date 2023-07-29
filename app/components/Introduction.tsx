import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Introduction() {
  return (
    <div>
      <div className='flex justify-center mt-16 mb-12 lg:hidden'>
        <Image src={'/me.jpg'} alt='Jom Dollesin' width={160} height={160} className='rounded-full lg:scale-150' />
      </div>
      <div className='lg:flex lg:justify-center lg:mt-10 lg:items-center lg:mx-auto lg:max-w-3xl'>
        <div className='text-center space-y-5 lg:text-start lg:text-lg'>
          <h1
            className={`text-center text-2xl font-bold my-5 lg:text-start lg:text-4xl lg:pb-4 ${montserrat.className}`}
          >
            Hey, I'm Jom.
          </h1>
          <p>
            I am a <b>student</b> and a <b>programmer</b> at the moment. As a side gig, I'm a full-stack developer.
            Every coding endeavor starts with brainstorming and ends with solving real-world issues.
          </p>
          <p>
            My goal is to make this website my primary online presence. I'll share some of my opinions on topics that
            interest me, such as creating websites, and the books I'm reading at the moment.
          </p>
          <p>If this section seems empty, have faith; there's more on the way!</p>
        </div>
        <div className='hidden lg:block lg:ml-10 lg:mt-20'>
          <Image src={'/me.jpg'} alt='Jom Dollesin' width={700} height={700} className='rounded-full' />
        </div>
      </div>
    </div>
  )
}
