import Books from './_components/Books'
import Credentials from './_components/Credentials'
import Podcasts from './_components/Podcasts'
import Schools from './_components/Schools'
import Story from './_components/Story'
import Testimonials from './_components/Testimonials'

const About = () => {
  return (
    <>
      <div className="h-[calc(90vh-80px)] bg-[url('/haneen/haneen-1.png')] bg-cover bg-center bg-no-repeat flex items-end">
        <div className="max-w-[1200px] px-6 mx-auto w-full">
          <h1 className="font-serif md:text-[100px] text-5xl drop-shadow-lg text-white pb-32 border-r-2 border-solid border-white">
            Hola, I&apos;m Haneen
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] px-6 mx-auto">
        <Story />
        <Credentials />
        <Schools />
        <Podcasts />
        <Books />
        <Testimonials />
      </div>
    </>
  )
}

export default About
