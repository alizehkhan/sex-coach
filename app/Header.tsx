import Link from 'next/link'

export const LINKS = ['About', 'Workshops', 'Coaching', 'Blog', 'Contact']

const Header = () => {
  return (
    <header className="max-w-[1200px] mx-auto py-8 px-6 flex justify-between w-full">
      <Link
        href="/"
        className="font-serif text-2xl font-semibold text-stone-700"
      >
        Haneen Khan
      </Link>
      <nav>
        <ul className="flex gap-5 text-stone-600">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link href={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
