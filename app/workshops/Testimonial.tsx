import Image from 'next/image'

const Testimonial = () => {
  return (
    <>
      <blockquote className="max-w-2xl mx-auto bg-white mt-24 w-fit rounded-md px-20 py-12 shadow-sm">
        <q className="font-serif text-stone-600 text-xl">
          Does it sound too much if I say your workshop was life-changing? It
          really was! I came away with a deeper understanding of my own
          sexuality - from the origins of my sexual hangups, to clear techniques
          to flip the switches on my shame triggers and use them to unlock new
          levels of desire and safety. The games, dynamics and roles I learned
          are now key parts of my sex life, and have led to some of the best sex
          I've ever had.
        </q>
        <cite className="mt-4 flex gap-3 items-center">
          <Image
            src="/testimonials/testimonial-sam.png"
            alt=""
            height={48}
            width={48}
            className="rounded-full object-cover w-12 h-12 border-white border-solid border-[3px] shadow-md"
          />
          <div>
            <p className="text-stone-700 font-semibold">Sam</p>
            <p className="text-stone-500 text-sm">United Kingdom 🇬🇧</p>
          </div>
        </cite>
      </blockquote>
    </>
  )
}

export default Testimonial
