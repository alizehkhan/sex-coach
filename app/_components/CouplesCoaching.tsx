import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

const CouplesCoaching = () => {
  return (
    <div className="py-12 px-16 bg-stone-100 rounded-lg mt-24 gap-12 flex md:flex-row flex-col">
      <div className="flex-1">
        <h2 className="text-6xl text-stone-700 leading-tight font-serif tracking-tight font-semibold">
          Couples Intimacy Coaching
        </h2>
        <Link
          href="https://calendly.com/intimacycoaching/chemistrycall"
          target="_blank"
          className="bg-rose-800 mt-6 w-fit text-white px-3 py-2 rounded-md block"
        >
          Book free chemistry call
        </Link>
      </div>
      <div className="flex-1">
        <p className="text-2xl font-semibold text-stone-700 leading-tight font-serif tracking-tight mt-4">
          An 8-week journey back to each other 🔥
        </p>
        <p className="text-stone-700 mt-4">
          I’ve coached hundreds of couples to break out of routine and feel more
          pleasure, desire, intimacy and aliveness in their sexual connection. I
          give couples a rich understanding of their needs & turn-ons, and make
          their conversations about sex feel effortless, and even fun!
        </p>
        <Link
          href="/coaching"
          className="text-stone-600 mt-6 items-center flex gap-1 hover:underline hover:underline-offset-4"
        >
          Learn more
          <IconChevronRight stroke={1.5} />
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
