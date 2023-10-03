import Link from 'next/link'
import { LINKS } from './Header'

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 mt-24 bg-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-4xl text-stone-700 font-serif font-semibold">
          Haneen Khan
        </p>
        <p className="text-stone-500 font-serif text-2xl mt-1">
          Sex & Intimacy Coach
        </p>
        <div className="flex gap-12 justify-end">
          <div className="text-stone-500 flex flex-col w-fit gap-3 mb-8 mt-2">
            <Link
              className="hover:text-stone-700"
              href="https://www.facebook.com/groups/sexhomeworksociety"
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              className="hover:text-stone-700"
              href="https://instagram.com/sexyandsilly"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              className="hover:text-stone-700"
              href="https://www.youtube.com/channel/UCkItIGs0gqySSuWa4LDV9MA"
              target="_blank"
            >
              Youtube
            </Link>
          </div>
          <nav>
            <ul className="text-stone-500 flex flex-col w-fit gap-3 mb-8 mt-2">
              {LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    className="hover:text-stone-700"
                    href={`/${link.toLowerCase()}`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="text-xs text-stone-700 flex gap-2 border-t-stone-300 border-solid border-[1px] pt-6">
          <p>All rights reserved © Haneen Khan 2023</p>
          <div>
            <Link className="underline" href={''}>
              Privacy
            </Link>{' '}
            |{' '}
            <Link className="underline" href={''}>
              Terms
            </Link>
          </div>
          <p>
            Website by{' '}
            <Link
              className="underline"
              target="_blank"
              href="https://alizehkhan.com"
            >
              Alizeh
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
