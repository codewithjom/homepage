import Introduction from './Introduction'
import LookingForSomethign from './LookingForSomething'
import LatestPost from './LatestPosts'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className='text-[#CDD6F4]'>
      <div className='mx-5'>
        <Introduction />
        <LookingForSomethign />
        <LatestPost />
        <Footer />
      </div>
    </div>
  )
}
