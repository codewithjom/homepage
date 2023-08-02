import timeline from './data/timeline'
import TimelineItem from './TimelineItem'

export default function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12 lg:max-w-3xl'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-4 mb-5'>Timeline</h1>
        {timeline.map(item => (
          <TimelineItem
            key={item.id}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}
