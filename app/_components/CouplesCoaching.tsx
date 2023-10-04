import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

const CouplesCoaching = () => {
  return (
    <div className="max-w-xl py-12 px-16 bg-stone-100 rounded-lg mt-24">
      <h2 className="text-6xl text-stone-700 leading-[1.15] font-serif tracking-tight font-semibold">
        Couples Intimacy Coaching
      </h2>
      <p className="text-5xl text-stone-500 leading-tight font-serif tracking-tight mt-4">
        An 8-week journey back to each other 🔥
      </p>
      <p className="text-stone-700 text-lg mt-4">
        I’ve coached hundreds of couples to break out of routine and feel more
        pleasure, desire, intimacy and aliveness in their sexual connection. I
        give couples a rich understanding of their needs & turn-ons, and make
        their conversations about sex feel effortless, and even fun!
      </p>
      <div className="flex gap-6 items-center mt-6">
        <Link
          href="https://calendly.com/intimacycoaching/chemistrycall"
          target="_blank"
          className="bg-rose-800 w-fit text-lg text-white px-4 py-3 rounded-md block"
        >
          Book free chemistry call
        </Link>
        <Link
          href="/coaching"
          className="text-lg text-stone-600 items-center flex gap-2 hover:underline hover:underline-offset-4"
        >
          Learn more
          <IconChevronRight />
        </Link>
      </div>
    </div>
  )
}

export default CouplesCoaching

// <ul className="text-stone-700 text-lg mt-8">
//   <li className="mt-2 pl-8">Maybe you struggle getting turned on</li>
//   <li className="mt-2 pl-8">
//     Maybe you repeat the same sex routine over and over again.
//   </li>
//   <li className="mt-2 pl-8">
//     Maybe you feel disconnected from each other
//   </li>
//   <li className="mt-2 pl-8">
//     Maybe one of always initiates sex, and the other feels pressure to say
//     yes!
//   </li>
// </ul>
