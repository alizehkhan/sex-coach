import Link from 'next/link'

import { COMING_SOON_WORKSHOPS } from './content'

const Workshops = () => {
  return (
    <div className="max-w-[1200px] px-6 mx-auto">
      <div className="bg-stone-100 py-6 px-8 rounder-md max-w-lg">
        <h2 className="font-serif text-4xl font-semibold">
          Workshops coming soon
        </h2>
        <p className="text-xl text-stone-500 mt-2">
          Notify me when these workshops are released
        </p>
        <Link
          href=""
          className="bg-rose-800 w-fit text-white px-3 py-2 rounded-md block mt-4"
        >
          Notify me
        </Link>
      </div>
      <div>
        {COMING_SOON_WORKSHOPS.map((workshop, i) => (
          <div
            key={i}
            className="max-w-lg py-6 border-b-[1px] border-solid border-stone-300"
          >
            <h3 className="text-2xl mb-1 font-serif font-semibold text-stone-700">
              {workshop.title}
            </h3>
            <p className="text-stone-500">{workshop.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Workshops