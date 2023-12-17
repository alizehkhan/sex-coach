'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LINKS } from '../about/content'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-7">
      <Link href="/" className="font-serif text-2xl text-white">
        Haneen Khan
      </Link>
      <nav>
        <ul className="flex gap-5 text-white">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link
                href={`/${link === 'Home' ? '' : link.toLowerCase()}`}
                className={`${
                  pathname === `/${link.toLowerCase()}` && 'underline'
                } decoration-2 underline-offset-4 hover:underline`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
