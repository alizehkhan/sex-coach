import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect } from 'react'

import { LINKS } from './Header'

const MobileNav = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: {
  isMobileNavOpen: boolean
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <nav>
      <ul
        hidden={!isMobileNavOpen}
        id="primary-menu"
        className="ml-8 flex flex-col items-start gap-6 text-2xl"
      >
        {LINKS.map((link, i) => (
          <li key={i}>
            <Link
              href={link.toLowerCase()}
              onClick={() => setIsMobileNavOpen(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNav
