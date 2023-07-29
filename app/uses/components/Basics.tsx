import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Basics() {
  return (
    <div>
      <div className='mt-16 lg:max-w-3xl lg:mx-auto'>
        <h1 className={`text-2xl font-bold ${montserrat.className}`}>The Basics</h1>
        <div className='mt-10'>
          <ul className='list-disc mx-4 space-y-4'>
            <li>
              I use{' '}
              <Link href='https://archlinux.org' target='_blank' className='text-[#FAB387] font-bold'>
                Arch
              </Link>{' '}
              Linux (btw). It's the only Linux version that just lets me do my work without getting in the way. After
              you get past the initial learning curve, it's very simple and easy to use, but it's worth the money.
            </li>
            <li>
              My window manager is{' '}
              <Link href='https://github.com/grassmunk/Chicago95' target='_blank' className='text-[#FAB387] font-bold'>
                Chicago95
              </Link>
              , a Linux version of everyone's favorite Microsoft operating system from 1995.
            </li>
            <li>
              <Link href='https://alacritty.org/' target='_blank' className='text-[#FAB387] font-bold'>
                Alacritty
              </Link>{' '}
              is my terminal. It is a free, open-source, GPU-accelerated terminal emulator that focuses on speed and
              ease of use.
            </li>
            <li>
              I use{' '}
              <Link
                href='https://www.mozilla.org/en-US/firefox/new/'
                target='_blank'
                className='text-[#FAB387] font-bold'
              >
                Firefox
              </Link>{' '}
              to browse the web. I've tried all the other browsers, but Firefox is still the best, even though it has
              some problems.
              <ul className='mt-4'>
                <li>Extensions:</li>
              </ul>
              <ul className='list-disc ml-8 mt-2'>
                <li>
                  <Link
                    href='https://github.com/gorhill/uBlock#ublock-origin'
                    target='_blank'
                    className='text-[#FAB387] font-bold'
                  >
                    uBlock Origin
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.i-dont-care-about-cookies.eu/'
                    target='_blank'
                    className='text-[#FAB387] font-bold'
                  >
                    I don't care about cookies
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
