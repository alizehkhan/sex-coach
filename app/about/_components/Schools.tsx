import { SCHOOLS } from '../content'

const Schools = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-8 gap-6 justify-between mt-40">
      <h2 className="font-serif font-semibold text-4xl text-stone-700">
        Schools I love
      </h2>
      <ul>
        {SCHOOLS.map((school, i) => (
          <li
            className="md:mb-4 mb-2 font-serif font-semibold md:text-5xl text-3xl text-stone-400"
            key={i}
          >
            {school}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Schools
