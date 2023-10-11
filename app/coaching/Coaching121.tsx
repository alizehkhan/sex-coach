import { IconCheck } from '@tabler/icons-react'
import Link from 'next/link'

const Coaching121 = () => {
  return (
    <>
      <h2 className="font-serif mb-8 text-stone-700 text-4xl font-semibold mt-24">
        1:1 Coaching
      </h2>
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="py-8 px-10 w-fit rounded-lg bg-stone-100">
          <p className="font-serif text-6xl font-semibold text-stone-700">
            £840
          </p>
          <p className="text-stone-700 text-lg font-semibold">
            3 months (7 x 1 hour sessions)
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
            href="https://calendly.com/intimacycoaching/complimentary-coaching-call"
            target="_blank"
            className="bg-rose-800 hover:bg-rose-900 w-fit text-white px-3 py-2 rounded-md block mt-8"
          >
            Book a free discovery call
          </Link>
        </div>
        <div className="py-8 px-10 w-fit flex flex-col justify-between rounded-lg bg-stone-100">
          <div>
            <p className="font-serif text-6xl font-semibold text-stone-700">
              £140
            </p>
            <p className="text-stone-700 text-lg font-semibold">
              One-off 1 hour session
            </p>
          </div>
          <Link
            href="https://calendly.com/intimacycoaching/complimentary-coaching-call"
            target="_blank"
            className="bg-rose-800 hover:bg-rose-900 w-fit text-white px-3 py-2 rounded-md block mt-8"
          >
            Book a free discovery call
          </Link>
        </div>
      </div>
    </>
  )
}

export default Coaching121
