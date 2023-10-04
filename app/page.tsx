import About from './_components/About'
import CouplesCoaching from './_components/CouplesCoaching'
import Testimonials from './_components/Testimonials'

export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-80px)] bg-[url('/haneen-0.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-[1200px] px-6 mx-auto pt-24">
        <CouplesCoaching />
        <About />
        <Testimonials />
      </div>
    </>
  )
}
