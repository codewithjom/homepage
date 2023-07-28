import Link from 'next/link'

export default function LookingForSomethign() {
  return (
    <div>
      <div className='bg-[#1E293B] mt-10 py-5 rounded-xl'>
        <h1 className='text-center text-2xl font-bold'>Looking for something?</h1>
        <ul className='list-disc mx-10 mt-5'>
          <li>
            📜 Dotfiles and scripts on{' '}
            <Link href='https://github.com/codewithjom/dotfiles' target='_blank' className='text-[#FAB387]'>
              GitHub.
            </Link>
          </li>
          <li>
            💻 Interested in my everyday software and how I customize my computer's desktop? See my{' '}
            <Link href='#' className='text-[#FAB387]'>
              Uses{' '}
            </Link>
            page.
          </li>
          <li>
            Looking to make contact? Don't hesitate to{' '}
            <Link href='#' className='text-[#FAB387]'>
              contact{' '}
            </Link>
            me.
          </li>
        </ul>
      </div>
    </div>
  )
}
