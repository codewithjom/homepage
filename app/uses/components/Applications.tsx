import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Applications() {
  return (
    <div>
      <div className='mt-16 lg:max-w-3xl lg:mx-auto'>
        <h1 className={`text-2xl font-bold ${montserrat.className}`}>Applications</h1>
        <div className='mt-10'>
          <p>Most of the apps I use every day are the basic ones, and these are the few apps I use every day.</p>
          <ul className='list-disc mx-4 space-y-4 mt-5'>
            <li>
              I use{' '}
              <Link href='https://neovim.io' target='_blank' className='text-[#FAB387] font-bold'>
                neovim
              </Link>{' '}
              for all of my writing. vim notoriously has a steep learning curve, but as with most things, I think the
              payoff is worth it.
            </li>
            <li>
              When I'm working on bigger projects, I prefer to use{' '}
              <Link href='https://code.visualstudio.com/' target='_blank' className='text-[#FAB387] font-bold'>
                VS Code
              </Link>{' '}
              as my code editor.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
