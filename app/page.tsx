import About from './_components/About'
import Blog from './_components/Blog'
import Testimonials from './_components/Testimonials'

export default function Home() {
  return (
    <>
      <div className="flex h-[calc(100vh-80px)] items-end bg-[linear-gradient(180deg,rgba(0,0,0,0.00)45%,rgba(0,0,0,0.20)70%),url('/haneen/haneen-0.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="max-w-[700px] border-l-8 border-solid border-white pb-28 pl-8 pt-4 font-serif text-5xl text-white drop-shadow-lg md:text-[100px]">
            Sex & dating confidence in 12 weeks
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 pt-24">
        <About />
        <Blog />
        <Testimonials />
      </div>
    </>
  )
}
