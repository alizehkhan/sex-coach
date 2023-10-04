import Link from 'next/link'

import { LINKS } from './Header'

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 mt-24 bg-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-4xl tracking-tight text-stone-700 font-serif font-semibold">
          Haneen Khan
        </p>
        <p className="text-stone-500 font-serif text-2xl mt-1">
          Sex & Intimacy Coach
        </p>
        <div className="flex justify-between mt-10">
          <form action="" className="max-w-[440px]">
            <p className="text-stone-600 mb-6">
              Subscribe to my juicy newsletter for awkward dissections of my sex
              & relationship life 💦
            </p>
            <label
              htmlFor="email"
              className="block font-semibold mb-1 text-stone-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="off"
              className="py-6 px-7 text-stone-600 focus:outline-2 focus:outline-stone-400 focus:outline text-xl rounded-md bg-stone-100 w-full"
            />
            <button
              type="submit"
              className="bg-stone-700 hover:bg-stone-800 text-white px-3 py-2 rounded-md block mt-4"
            >
              Subscribe
            </button>
          </form>
          <div>
            <div className="flex gap-12">
              <div className="text-stone-600 flex flex-col w-fit gap-3 mb-8 mt-2">
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
                <ul className="text-stone-600 flex flex-col w-fit gap-3 mb-8 mt-2">
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
          </div>
        </div>
        <div className="text-xs text-stone-600 flex pt-6 mt-8">
          <p>
            All rights reserved © Haneen Khan 2023 |{' '}
            <address className="inline">hello@haneenkhan.com</address> |
          </p>
          <div>
            <Link className="underline" href="/privacy">
              Privacy
            </Link>{' '}
            |{' '}
            <Link className="underline" href={''}>
              Terms
            </Link>{' '}
            |{' '}
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
