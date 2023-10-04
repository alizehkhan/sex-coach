import Link from 'next/link'

import { COMING_SOON_WORKSHOPS } from './content'
import Testimonial from './Testimonial'

const Workshops = () => {
  return (
    <>
      <div className="h-[calc(100vh-80px)] bg-[url('/haneen-3.png')] bg-cover bg-center bg-no-repeat flex items-end">
        <div className="max-w-[1200px] px-6 mx-auto w-full">
          <h1 className="font-serif md:text-[100px] text-5xl text-white drop-shadow-lg pb-32 border-r-2 border-solid border-white">
            Workshops
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] px-6 mx-auto">
        <div className="flex md:flex-row flex-col gap-12 mt-20">
          <div className="bg-stone-100 py-6 px-8 rounded-md max-w-lg h-fit">
            <h2 className="font-serif text-4xl font-semibold">
              Workshops coming soon
            </h2>
            <p className="text-xl text-stone-500 mt-2">
              Notify me when these workshops are released
            </p>
            <Link
              href="https://sexhomeworksociety.typeform.com/to/qwb4MdHg"
              target="_blank"
              className="bg-rose-800 w-fit text-white px-3 py-2 rounded-md block mt-4"
            >
              Notify me
            </Link>
          </div>
          <div className="border-t-[1px] border-solid border-stone-300">
            {COMING_SOON_WORKSHOPS.map((workshop, i) => (
              <div
                key={i}
                className="max-w-lg py-6 border-b-[1px] border-solid border-stone-300"
              >
                <h3 className="text-2xl mb-1 font-serif font-semibold text-stone-700">
                  {workshop.title}
                </h3>
                <p className="text-stone-500">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Testimonial />
      </div>
    </>
  )
}

export default Workshops
