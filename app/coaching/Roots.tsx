const ROOTS = [
  {
    title: '🙆🏻‍♀️ Authenticity',
    description:
      '“It’s unsafe to be me” is a belief I carried into adulthood. My work is about reclaiming the truest version of yourself: learning to welcome all the messiness & discomfort.',
  },
  {
    title: '🌈 Playfulness',
    description:
      'Without compromising on depth. I will challenge you, play with you & encourage you to break scripts through improv, and embrace your inner child.  Playing is the antidote to shame.',
  },
  {
    title: '🧘🏻‍♀️ Embodiment',
    description:
      'Whatever we work on, the body will be your north compass. 🧭  Let’s bring it’s wisdom back online, learn to trust it’s signals & slow down to fully feel your feelings.',
  },
]

const Roots = () => {
  return (
    <div className="flex gap-12 mt-16 md:flex-row flex-col">
      <h2 className="text-4xl font-serif max-w-[240px] text-stone-700 font-semibold">
        My coaching is rooted in
      </h2>
      <ul className="flex flex-col gap-12 max-w-xs">
        {ROOTS.map((root, i) => (
          <li key={i}>
            <h3 className="font-serif text-stone-700 text-xl font-semibold">
              {root.title}
            </h3>
            <p className="text-stone-500">{root.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Roots
