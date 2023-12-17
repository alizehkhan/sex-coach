import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <div className="max-w-[700px] rounded-xl text-lg opacity-90">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-stone-700 md:text-6xl">
          Hi deeeears, I&apos;m Haneen.
        </h2>
        <p className="mt-4 font-serif text-2xl font-semibold tracking-tight text-stone-500 md:text-5xl md:leading-tight">
          👋🏼 My story from Indian lawyer 👩🏻‍💼 to wild sex coach is a real
          head-turner at dinners. 🤭
        </p>
        <div className="mt-4 flex gap-16 text-stone-600">
          <div className="flex-1">
            <p className="mt-4">
              “Wait, WHAT? You were a lawyer?!”. YUP, what can I say. I weirdly
              enjoyed running around barefoot (cos heels are the devil 👠⛔),
              pretending to be professional in my overpriced suit with chocolate
              stains- and realise: “YEP. This isn&apos;t me.”
            </p>
            <p className="mt-4">
              Soooo I ditched the cushy corporate world (bye-byeeeee 👋🏼) and
              began to run play parties in a mansion in London 😂. And thats
              when I realised this whole “sexual liberation thing” was actually
              kinda life changing.
            </p>
          </div>
          <div className="flex-1">
            <p className="mt-4">
              I went from being clueless & disconnected from my body to
              empowered & knowing wtf I wanted. Which rippled into the rest of
              my life. I stopped pleasing other people, I ASKED for more (I
              highly recommend it 💁🏻‍♀️), took waaay more risk— and tolerated less
              sh*t 💩 in life.
            </p>
            <p className="mt-4">
              Somehow SEX did that. And that&apos;s why I do what I do.
              That&apos;s why our work together is so much more than just “sex &
              dating”. It&apos;s about how we relate with ourselves and the
              people around us.
            </p>
          </div>
        </div>
        <Link
          href="/about"
          className="mt-6 flex w-fit items-center gap-1 font-semibold text-stone-700 underline underline-offset-8 transition-all hover:gap-4"
        >
          About me
          <IconChevronRight stroke={1.5} />
        </Link>
      </div>
    </>
  )
}

export default About
