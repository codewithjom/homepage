import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <div className='mt-24 mx-auto space-y-4 text-[#7F849C]'>
        <div className='flex justify-center'>
          <Link href='https://github.com/codewithjom'>
            <Image src={'/github.svg'} alt='GitHub logo' width={30} height={30} />
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href='#'>
            <p className='underline italic mr-1'>Uncopyrighted</p>
          </Link>
          <p className='italic'>and built by Jom Dollesin</p>
        </div>
      </div>
    </div>
  )
}
