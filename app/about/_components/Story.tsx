import Image from 'next/image'

const Story = () => {
  return (
    <>
      <div className="ml-auto max-w-3xl w-fit">
        <p className="md:text-5xl text-3xl md:leading-tight text-stone-700 leading-tight font-semibold font-serif mt-24 tracking-tight">
          Would you believe, I used to be a lawyer?! 😱🤭 There I was cracking
          inappropriate sex stories at the office. 👩🏻‍💼💼
        </p>
        <div className="flex md:flex-row w-full flex-col md:gap-16 mt-8 text-lg">
          <div className="flex-1">
            <p className="text-stone-600 mt-4">
              I was in a monogamous relationship, with a happy regimented life
              in London... Until I had a devastating breakup. 💔 After that - I
              couldn&apos;t shake the feeling of being trapped.
            </p>
            <p className="text-stone-600 mt-4">
              I was kinda done with doing “what was expected of me”. Whether it
              was faking pleasure during sex, picking monogamy because that was
              the default, being hyper attuned to others, or picking a career
              that was highly approved of. I WAS SUCH A GOOD GIRL (and the
              naughty fun kind).
            </p>
            <p className="text-stone-600 mt-4">
              Until. That pattern became boring to me. I began challenging
              relationship paradigms and “sexperimenting” to find my true
              self-expression.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-stone-600 mt-4">
              I organised play parties, tried polyamory, indulged in so much
              casual sex... It was LIBERATING.
            </p>
            <p className="text-stone-600 mt-4">
              I noticed my super power was my ability to talk about sex with
              ease & lightness. So many candid conversations with sexual
              partners. So many layers of shame gradually shedding away.
            </p>

            <p className="text-stone-600 mt-4">
              Fast forward 7 years, I am now a relationship anarchist. I am
              committed to 100% authenticity and play. I am committed to
              honouring my body. And I have to thank sex for that.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mt-32">
        <p className="font-serif md:text-5xl text-3xl md:leading-tight font-semibold text-stone-700 leading-tight tracking-tight">
          🙏🏼 Sex helped me get in touch with my deepest desires, my no, my
          pleasure, my ability to take up space, my ability to communicate my
          needs.
        </p>
        <p className="font-serif md:text-4xl md:leading-tight text-2xl font-semibold text-stone-400 mt-8 leading-tight tracking-tight">
          It was a powerful catalyst. At the same time, I experienced a shift in
          my social and work life. Because how I show up in the bedroom, is how
          I show up in life. So I&apos;ve made it my life mission to empower
          people to do the very same.
        </p>
        <Image
          src="/haneen/haneen-5.png"
          alt=""
          height={512}
          width={768}
          className="object-cover mt-12 w-full rounded-lg"
        />
      </div>
      <div className="ml-auto w-fit my-32 max-w-3xl">
        <p className="font-serif md:text-5xl text-3xl md:leading-tight font-semibold text-stone-700 leading-tight tracking-tight">
          My content is about sex, but{' '}
          <span className="text-stone-400 italic">(shhhh!)</span> it&apos;s not
          about sex. 💁‍♀️ This is about how to be shamelessly you.{' '}
        </p>
        <div className="mt-8 flex md:flex-row flex-col text-lg md:gap-16 gap-4">
          <p className="text-stone-600 flex-1">
            So I&apos;m gonna role model that sh*t. 😂 I am shameless. I
            over-share everything. I am “TMI”. Ok, so maybe sharing scandalous
            sex stories at Friday work socials, wasn&apos;t the most sensible
            thing I&apos;ve ever done. 💁🏻‍♀️ But hopefully it&apos;s my ease of
            speaking about sex that rubs off on you, not my inappropriateness.🐒
          </p>
          <div className="flex-1">
            <p className="text-stone-600">
              My wish is for “sex speak” to be as normal as talking about dinner
              options. Like, “Babe, shall we do anal or a bossy massage tonight?
              🍽️”
            </p>
            <p className="text-stone-600 mt-4">
              Come to one of my workshops & experience what I mean. You&apos;ll
              be surprised how normal it will feel.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Story
