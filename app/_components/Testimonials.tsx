import Image from 'next/image'

import { TESTIMONIALS } from '../content'

const Testimonials = () => {
  return (
    <>
      <h2 className="font-serif font-semibold text-4xl text-stone-700 mt-24 mb-8">
        Testimonials
      </h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
        {TESTIMONIALS.map((testimonial, i) => (
          <div key={i} className="bg-white shadow-sm rounded-md px-8 py-6">
            <blockquote>
              <q className="text-stone-500">{testimonial.quote}</q>
              <cite className="mt-4 flex gap-3 items-center">
                <Image
                  src={testimonial.image}
                  alt=""
                  height={48}
                  width={48}
                  className="rounded-full object-cover w-12 h-12 border-white border-solid border-[3px] shadow-md"
                />
                <div>
                  <p className="text-stone-700 font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-stone-500 text-sm">
                    {testimonial.country}
                  </p>
                </div>
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </>
  )
}

export default Testimonials
