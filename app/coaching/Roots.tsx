const ROOTS = [
  {
    title: "🙆🏻‍♀️ Authenticity",
    description:
      "“It’s unsafe to be me” is a belief I carried into adulthood. My work is about reclaiming the truest version of yourself: learning to welcome all the messiness & discomfort.",
  },
  {
    title: "🌈 Playfulness",
    description:
      "Without compromising on depth. I will challenge you, play with you & encourage you to break scripts through improv, and embrace your inner child.  Playing is the antidote to shame.",
  },
  {
    title: "🧘🏻‍♀️ Embodiment",
    description:
      "Whatever we work on, the body will be your north compass. 🧭  Let’s bring it’s wisdom back online, learn to trust it’s signals & slow down to fully feel your feelings.",
  },
];

const Roots = () => {
  return (
    <div className="mt-24">
      <h2 className="mb-8 font-serif text-4xl font-semibold leading-none tracking-tight text-stone-700">
        My coaching is rooted in
      </h2>
      <ul className="flex flex-col justify-between gap-8 md:flex-row">
        {ROOTS.map((root, i) => (
          <li key={i} className="rounded-md bg-white px-8 py-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-stone-700">
              {root.title}
            </h3>
            <p className="text-stone-500">{root.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roots;
