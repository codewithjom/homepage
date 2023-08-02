type Props = {
  year: string
  title: string
  duration: string
  details: string
}

export default function TimelineItem({ year, title, duration, details }: Props) {
  return (
    <div>
      <ol className='flex flex-col md:flex-row relative border-l'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-[#1E293B] rounded-full mt-1.5 -left-1.5 border'></div>
          <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold bg-[#1E293B] rounded-md'>{year}</span>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <div className='my-1 text-sm font-normal leading-none'>{duration}</div>
          </div>
          <p className='my-2 text-base font-normal text-gray-400'>{details}</p>
        </li>
      </ol>
    </div>
  )
}
