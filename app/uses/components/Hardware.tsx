import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Hardware() {
  return (
    <div>
      <div className='mt-16 lg:max-w-3xl lg:mx-auto'>
        <h1 className={`text-2xl font-bold ${montserrat.className}`}>Hardware</h1>
        <div className='mt-10'>
          <ul className='list-disc mx-4 space-y-4'>
            <li>
              All of my work is done on a blue{' '}
              <Link
                href='https://iponcomp.com/shop/product/acer-aspire-f5-573g-nxghseu007-blue/1564760'
                target='_blank'
                className='text-[#FAB387] font-bold'
              >
                ACER Aspire F5-573G NX.GHSEU.007
              </Link>{' '}
              laptop. This is one of my very old laptops, and yes, I'm broke!
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
