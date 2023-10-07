import { IconChevronDown } from '@tabler/icons-react'
import { ReactNode } from 'react'

const Accordion = ({
  toggle,
  header,
  children,
  isOpen,
  i,
}: {
  toggle: (index: number) => void
  header: string
  children: ReactNode
  isOpen: boolean
  i: number
}) => {
  return (
    <div className="bg-stone-100 shadow-sm rounded-md">
      <h3 className="font-semibold text-stone-700">
        <button
          aria-expanded={isOpen}
          className="px-8 py-6 text-left w-full flex justify-between gap-4"
          onClick={() => toggle(i)}
        >
          {header}
          <IconChevronDown
            className={`transition-all ${isOpen && 'rotate-180'}`}
          />
        </button>
      </h3>
      <div
        className={`grid accordion-content transition-all grid-rows-[0fr] px-8 ${
          isOpen && 'grid-rows-[1fr] pb-6'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden text-stone-600">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
