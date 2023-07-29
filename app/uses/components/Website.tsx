import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Website() {
  return (
    <div>
      <div className='mt-16 lg:max-w-3xl lg:mx-auto'>
        <h1 className={`text-2xl font-bold ${montserrat.className}`}>This Website</h1>
        <div className='mt-10'>
          <ul className='list-disc mx-4 space-y-4'>
            <li>
              <Link href='https://nextjs.org' target='_blank' className='text-[#FAB387] font-bold'>
                Next.js
              </Link>{' '}
              is a React framework that facilitates server-side rendering and static site generation
            </li>
            <li>
              <Link href='https://tailwindcss.com/' target='_blank' className='text-[#FAB387] font-bold'>
                Tailwind CSS
              </Link>{' '}
              is a utility-first CSS framework that provides a comprehensive set of utility classes to quickly style web
              interfaces.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
