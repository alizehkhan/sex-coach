import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="mt-24 gap-12 bg-stone-100 py-12 px-16 flex justify-between">
      <div className="flex-1">
        <h2 className="font-serif font-semibold text-6xl text-stone-700 tracking-tight">
          Hi deeeears, I&apos;m Haneen.
        </h2>
        <p className="font-serif text-4xl text-stone-500 mt-4 tracking-tight leading-tight">
          👋🏼 My story from Indian lawyer 👩🏻‍💼 to wild sex coach is a real
          head-turner at dinners. 🤭
        </p>
      </div>
      <div className="flex-1 text-stone-600">
        <p className="mt-4">
          “Wait, WHAT? You were a lawyer?!”. YUP, what can I say. I weirdly
          enjoyed running around barefoot (cos heels are the devil 👠⛔),
          pretending to be professional in my overpriced suit with chocolate
          stains- and realise: “YEP. This isn&apos;t me.”
        </p>
        <p className="mt-4">
          Soooo I ditched the cushy corporate world (bye-byeeeee 👋🏼) and began
          to run play parties in a mansion in London 😂. And thats when I
          realised this whole “sexual liberation thing” was actually kinda life
          changing.
        </p>
        <p className="mt-4">
          I went from being clueless & disconnected from my body to empowered &
          knowing wtf I wanted. Which rippled into the rest of my life. I
          stopped pleasing other people, I ASKED for more (I highly recommend it
          💁🏻‍♀️), took waaay more risk— and tolerated less sh*t 💩 in life.
        </p>
        <p className="mt-4">
          Somehow SEX did that. And that&apos;s why I do what I do. That&apos;s
          why our work together is so much more than just “sex & dating”.
          It&apos;s about how we relate with ourselves and the people around us.
        </p>
        <Link
          href="/about"
          className="text-stone-600 mt-6 items-center flex gap-1 hover:underline hover:underline-offset-4"
        >
          Learn more
          <IconChevronRight stroke={1.5} />
        </Link>
      </div>
    </div>
  )
}

export default About
