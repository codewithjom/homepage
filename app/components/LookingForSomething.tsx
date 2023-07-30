import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function LookingForSomethign() {
  return (
    <div>
      <div className='bg-[#1E293B] mt-10 py-5 rounded-xl lg:mt-32 lg:py-14 lg:flex-1 lg:justify-center lg:items-center lg:mx-auto lg:max-w-4xl lg:text-lg'>
        <h1 className={`text-center text-lg font-bold lg:text-2xl lg:text-start lg:ml-14 ${montserrat.className}`}>
          Looking for something?
        </h1>
        <ul className='list-disc mx-10 mt-5 lg:ml-[75px] lg:space-y-2'>
          <li>
            📜 Dotfiles and scripts on{' '}
            <Link href='https://github.com/codewithjom/dotfiles' target='_blank' className='text-[#FAB387] font-bold'>
              GitHub.
            </Link>
          </li>
          <li>
            💻 Want to know my daily programs? See my{' '}
            <Link href='/uses' className='text-[#FAB387] font-bold'>
              Uses{' '}
            </Link>
            page.
          </li>
          <li>
            ✉️ Looking to make contact? Don't hesitate to{' '}
            <Link href='/contact' className='text-[#FAB387] font-bold'>
              contact{' '}
            </Link>
            me.
          </li>
        </ul>
      </div>
    </div>
  )
}
