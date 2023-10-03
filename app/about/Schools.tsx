import { SCHOOLS } from './content'

const Schools = () => {
  return (
    <div className="flex gap-8 justify-between mt-40">
      <h2 className="font-serif font-semibold text-4xl text-stone-700 mb-8">
        🎒 Schools I love
      </h2>
      <div>
        {SCHOOLS.map((school, i) => (
          <p
            className="mb-4 font-serif font-semibold text-5xl text-stone-400"
            key={i}
          >
            {school}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Schools
