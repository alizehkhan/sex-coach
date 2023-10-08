import Image from 'next/image'

const Testimonial = () => {
  return (
    <>
      <blockquote className="max-w-2xl mx-auto bg-white mt-24 w-fit rounded-lg md:px-16 md:py-12 px-8 py-6 shadow-sm">
        <q className="font-serif text-stone-600 text-xl">
          Haneen is exactly the kind of sex and intimacy coach you would want -
          she is a wonderful listener, asks great curious questions and embodies
          a humble confidence when it comes to talking about all things sex! It
          is not a topic many find easy to discuss but she does it with so much
          warmth, playfulness and openness! She is also an incredible source of
          knowledge and experience.
        </q>
        <cite className="mt-4 flex gap-3 items-center">
          <Image
            src="/testimonials/testimonial-georgie.png"
            alt=""
            height={48}
            width={48}
            className="rounded-full object-cover w-14 h-14 border-white border-solid border-[3px] shadow-md"
          />
          <div>
            <p className="text-stone-700 font-semibold">Georgie</p>
            <p className="text-stone-500 text-sm">United Kingdom 🇬🇧</p>
          </div>
        </cite>
      </blockquote>
    </>
  )
}

export default Testimonial
