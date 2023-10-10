import About from './_components/About'
import Blog from './_components/Blog'
import CouplesCoaching from './_components/CouplesCoaching'
import Testimonials from './_components/Testimonials'

export default function Home() {
  return (
    <>
      <div className="h-[calc(90vh-80px)] bg-[url('/haneen/haneen-0.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-[1200px] px-6 mx-auto pt-24">
        <CouplesCoaching />
        <About />
        <Blog />
        <Testimonials />
      </div>
    </>
  )
}
