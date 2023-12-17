import Image from 'next/image'

import { TESTIMONIALS } from '../content'

const Testimonials = () => {
  return (
    <>
      <h2 className="mb-8 mt-40 font-serif text-4xl font-semibold text-stone-700">
        Testimonials
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-4">
        {TESTIMONIALS.map((testimonial, i) => (
          <div key={i} className="rounded-md bg-white px-8 py-6 shadow-sm">
            <blockquote className="flex h-full flex-col justify-between">
              <q className="text-stone-500">{testimonial.quote}</q>
              <cite className="mt-4 flex items-center gap-3 not-italic">
                <Image
                  src={testimonial.image}
                  alt=""
                  height={48}
                  width={48}
                  className="h-12 w-12 rounded-full border-[3px] border-solid border-white object-cover shadow-md"
                />
                <div>
                  <p className="font-semibold text-stone-700">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-stone-500">
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
