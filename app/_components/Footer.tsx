import Link from "next/link";

import { LINKS } from "../about/content";

const Footer = () => {
  return (
    <footer className="mt-24 bg-stone-200 pb-8 pt-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="font-serif text-4xl font-semibold tracking-tight text-stone-700">
          Haneen Khan
        </p>
        <p className="mt-1 font-serif text-2xl text-stone-500">
          Sex & Intimacy Coach
        </p>
        <div className="mt-10 flex justify-between">
          <form action="" className="max-w-[400px]">
            <p className="mb-4 text-lg text-stone-600">
              Subscribe to my juicy newsletter for awkward dissections of my sex
              & relationship life 💦
            </p>
            <label
              htmlFor="email"
              className="mb-1 block font-semibold text-stone-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="off"
              className="w-full rounded-md bg-stone-100 p-4 text-xl text-stone-600 focus:outline focus:outline-2 focus:outline-stone-400"
            />
            <button
              type="submit"
              className="mt-4 block rounded-md bg-rose-800 px-3 py-2 text-white hover:bg-rose-900"
            >
              Subscribe
            </button>
          </form>
          <div>
            <div className="flex gap-12">
              <div className="mb-8 mt-2 flex w-fit flex-col gap-3 text-stone-600">
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
                <ul className="mb-8 mt-2 flex w-fit flex-col gap-3 text-stone-600">
                  {LINKS.map((link, i) => (
                    <li key={i}>
                      <Link
                        className="hover:text-stone-700"
                        href={`/${link === "Home" ? "" : link.toLowerCase()}`}
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
        <div className="mt-8 flex flex-wrap gap-4 pt-6 text-sm text-stone-600">
          <p>All rights reserved © Haneen Khan 2023</p>
          <address className="inline">hello@haneenkhan.com</address>
          <Link className="underline" href="/privacy">
            Privacy
          </Link>
          <p>
            Website by{" "}
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
  );
};

export default Footer;
