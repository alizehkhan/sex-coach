import { IconChevronRight } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

const CouplesCoaching = () => {
  return (
    <div className="py-12 px-16 bg-stone-100 rounded-lg gap-12 flex md:flex-row flex-col">
      <div className="flex-1">
        <Image
          src="/couples-coaching.png"
          alt=""
          height={300}
          width={400}
          className="w-full object-cover h-full rounded-lg"
        />
      </div>
      <div className="flex-1 text-lg">
        <h2 className="md:text-5xl text-4xl text-stone-700 leading-tight font-serif md:leading-tight tracking-tight font-semibold">
          Couples Intimacy Coaching
        </h2>
        <p className="text-2xl font-semibold text-stone-500 leading-tight font-serif tracking-tight mt-4">
          An 8-week journey back to each other 🔥
        </p>
        <p className="text-stone-600 mt-4">
          I’ve coached hundreds of couples to break out of routine and feel more
          pleasure, desire, intimacy and aliveness in their sexual connection. I
          give couples a rich understanding of their needs & turn-ons, and make
          their conversations about sex feel effortless, and even fun!
        </p>
        <Link
          href="/coaching"
          className="text-stone-700 w-fit mt-6 hover:gap-4 font-semibold transition-all items-center flex gap-1 underline underline-offset-8"
        >
          Learn more
          <IconChevronRight stroke={1.5} />
        </Link>
      </div>
    </div>
  )
}

export default CouplesCoaching
