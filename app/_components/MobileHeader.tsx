'use client'

import { IconMenu2, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { KeyboardEvent, useRef, useState } from 'react'

import MobileNav from './MobileNav'

const MobileHeader = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const MobileNavRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (isMobileNavOpen && event.key === 'Tab') {
      const focusableEls = MobileNavRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      const firstFocusableEl = focusableEls?.[0] as HTMLElement | undefined
      const lastFocusableEl = focusableEls?.[focusableEls.length - 1] as
        | HTMLElement
        | undefined

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl?.focus()
          event.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl?.focus()
          event.preventDefault()
        }
      }
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <header
      className={`max-w-[1200px] mx-auto py-7 px-6  ${
        isMobileNavOpen
          ? 'h-screen w-screen bg-stone-100'
          : 'flex items-center justify-between'
      }`}
      onKeyDown={handleKeyDown}
      ref={MobileNavRef}
    >
      {!isMobileNavOpen && (
        <Link href="/" className="font-serif text-2xl text-stone-700">
          Haneen Khan
        </Link>
      )}
      <button
        className="flex ml-auto items-center gap-1 bg-transparent py-3"
        aria-expanded={isMobileNavOpen}
        aria-controls="primary-menu"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? 'Close' : 'Menu'}
        {isMobileNavOpen ? (
          <IconX color="#4e4d49" size={24} aria-hidden={true} />
        ) : (
          <IconMenu2 color="#4e4d49" size={24} aria-hidden={true} />
        )}
      </button>
      {isMobileNavOpen && (
        <MobileNav
          setIsMobileNavOpen={setIsMobileNavOpen}
          isMobileNavOpen={isMobileNavOpen}
        />
      )}
    </header>
  )
}

export default MobileHeader
