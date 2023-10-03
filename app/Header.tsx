import Link from 'next/link'

interface Link {
  label: string
  url: string
}

const LINKS: Link[] = [
  {
    label: 'About',
    url: '/about',
  },
]

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
        <ul>
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
