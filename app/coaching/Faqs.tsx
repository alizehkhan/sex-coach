'use client'

import { useState } from 'react'

import Accordion from '../_components/Accordion'

import { QUESTIONS } from './content'

const Faqs = () => {
  const [selected, setSelected] = useState<number | null>()

  const handleToggle = (index: number | null) => {
    setSelected(selected !== index ? index : null)
  }

  return (
    <>
      <h2 className="font-serif text-stone-700 text-4xl font-semibold mt-24">
        FAQs
      </h2>
      <div className="flex flex-col gap-4 mt-6 max-w-[75ch]">
        {QUESTIONS.map(({ header, content }, i) => (
          <Accordion
            key={i}
            header={header}
            toggle={handleToggle}
            isOpen={selected === i}
            i={i}
          >
            {content}
          </Accordion>
        ))}
      </div>
    </>
  )
}

export default Faqs
