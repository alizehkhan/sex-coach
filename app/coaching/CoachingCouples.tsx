import { IconCheck } from '@tabler/icons-react'
import Link from 'next/link'

const CoachingCouples = () => {
  return (
    <>
      <h2 className="font-serif mb-8 text-stone-700 text-4xl font-semibold mt-24">
        Couples Coaching Programme
      </h2>
      <div className="py-8 px-10 w-fit rounded-lg bg-stone-100">
        <p className="font-serif text-6xl font-semibold text-stone-700">
          £1200
        </p>
        <p className="text-stone-700 text-lg font-semibold">
          3–4 months (8 x 75 min sessions)
        </p>
        <ul className="text-stone-600 mt-4">
          <li className="flex gap-2">
            <IconCheck />
            Email support & check-ins
          </li>
          <li className="flex gap-2 mt-2">
            <IconCheck />
            Personalised homework in between
          </li>
        </ul>
        <Link
          href="https://calendly.com/intimacycoaching/chemistrycall"
          target="_blank"
          className="bg-rose-800 hover:bg-rose-900 w-fit text-white px-3 py-2 rounded-md block mt-8"
        >
          Book a free chemistry call
        </Link>
      </div>
    </>
  )
}

export default CoachingCouples
