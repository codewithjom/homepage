import Image from 'next/image'

export default function Introduction() {
  return (
    <div>
      <div className='flex justify-center mt-24 mb-12'>
        <Image src='/profile.png' alt='Jom Dollesin' height={120} width={120} className='rounded-full scale-150' />
      </div>
      <h1 className='text-center text-2xl font-bold my-5'>Hey, I'm Jom.</h1>
      <div className='text-center space-y-5'>
        <p>I'm a web developer and a Student. When it comes to things like web development, I aim for simplicity.</p>
        <p>
          My goal is to make this website my primary online presence. I'll share some of my opinions on topics that
          interest me, such as creating websites, and the books I'm reading at the moment.
        </p>
        <p>If this section seems empty, have faith; there's more on the way!</p>
      </div>
    </div>
  )
}
