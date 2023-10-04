import Books from './Books'
import Podcasts from './Podcasts'
import Schools from './Schools'
import Testimonials from './Testimonials'

const About = () => {
  return (
    <>
      <div className="h-[calc(100vh-80px)] bg-[url('/haneen-1.png')] bg-cover bg-center bg-no-repeat flex items-end">
        <div className="max-w-[1200px] px-6 mx-auto w-full">
          <h1 className="font-serif md:text-[100px] text-5xl drop-shadow-lg text-white pb-32 border-r-2 border-solid border-white">
            Hola, I&apos;m Haneen
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] px-6 mx-auto">
        <Testimonials />
        <Schools />
        <Podcasts />
        <Books />
      </div>
    </>
  )
}

export default About
