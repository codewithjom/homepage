import Link from 'next/link'
import posts from './data/posts'

export default function LatestPost() {
  return (
    <div>
      <div>
        <h1 className='text-center text-2xl font-bold my-10'>Latest posts</h1>
        <div>
          <ul className='space-y-4'>
            {posts.map(item => (
              <div key={item.id} className='mx-4'>
                <li className='italic text-[#7F849C] text-sm'>{item.date}</li>
                <li className='text-[#FAB387] underline'>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
