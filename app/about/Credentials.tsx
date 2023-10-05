import Image from 'next/image'

const CREDENTIALS = [
  {
    school: 'Non-Violent Communication',
    level: 'Intermediate Level Training 2020',
    description:
      "Rooted in sharing one's feelings & needs. It is not an attempt to end disagreements, but a way to increase empathy and understanding.",
    image: '/credentials/nvc.png',
  },
  {
    school: 'Wheel of Consent',
    level: 'Like A Pro Training 2022',
    description:
      'A model of consent based on exchanges of touch, that breakdown dynamics of giving and receiving.',
    image: '/credentials/woc.png',
  },
  {
    school: 'Internal Family Systems Therapy',
    level: 'Level 1 2021',
    description:
      'An evidence-based psychotherapy, helping people to access and heal their parts such as the “inner critic” and “inner procrastinator”.',
    image: '/credentials/ifs.png',
  },
  {
    school: 'Authentic Relating',
    level: 'Level 2',
    description:
      "Training centered around expressing one's true feelings and emotions, showing vulnerability and allowing oneself to connect fully from your heart in the company of others.",
    image: '/credentials/art.png',
  },
  {
    school: 'London Foundation Certificate in Counselling & Psychotherapy',
    level: 'CORST accredited Level 5 2021',
    description:
      'Specifically designed to provide an introduction to counselling & psychotherapy skills and theories',
    image: '/credentials/lfc.png',
  },
  {
    school: 'Coaches Rising',
    level: 'The Power of Embodied Transformation 2020',
    description:
      'A somatic coaching training led by Richard Strozzi-Heckler and Staci Haines.',
    image: '/credentials/cr.png',
  },
]

const Credentials = () => {
  return (
    <div className="mt-24">
      <h2 className="font-serif text-4xl text-stone-700 font-semibold mb-10">
        My credentials
      </h2>
      <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {CREDENTIALS.map((credential, i) => (
          <div key={i} className="flex gap-6">
            <Image
              src={credential.image}
              className="w-48 h-20 object-contain shrink-0"
              width={200}
              height={64}
              alt=""
            />
            <div>
              <h3 className="text-stone-700 font-semibold text-lg">
                {credential.school}
              </h3>
              <p className="text-stone-700 mb-1">{credential.level}</p>
              <p className="text-stone-500">{credential.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Credentials
