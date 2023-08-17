import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Notes() {
  return (
    <div className='lg:max-w-3xl lg:mx-auto'>
      <h1 className={`font-bold text-2xl mt-10 ${montserrat.className}`}>Notes</h1>
    </div>
  )
}
