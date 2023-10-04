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
    <div className="mt-16">
      <h2 className="text-[120px] max-w-2xl leading-none mb-8 tracking-tight font-serif text-stone-300">
        My coaching is rooted in
      </h2>
      <ul className="flex gap-12">
        {ROOTS.map((root, i) => (
          <li key={i}>
            <h3 className="text-stone-700 mb-2 text-xl font-semibold">
              {root.title}
            </h3>
            <p className="text-stone-500 text-lg">{root.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Roots
