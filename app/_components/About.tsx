import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <div className="max-w-[700px] mt-24 text-lg text-stone-600 rounded-xl opacity-90">
        <h2 className="font-serif font-semibold md:text-6xl text-4xl text-stone-700 tracking-tight">
          Hi deeeears, I&apos;m Haneen.
        </h2>
        <p className="font-serif md:text-5xl font-semibold text-2xl text-stone-500 mt-4 tracking-tight md:leading-tight">
          👋🏼 My story from Indian lawyer 👩🏻‍💼 to wild sex coach is a real
          head-turner at dinners. 🤭
        </p>
        <div className="flex gap-8">
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
          className="text-stone-600 w-fit mt-6 items-center flex gap-1 hover:gap-4 transition-all underline underline-offset-8 font-semibold"
        >
          Learn more about me
          <IconChevronRight stroke={1.5} />
        </Link>
      </div>
    </>
  )
}

export default About
