import { IconBrandSpotify } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

import { PODCASTS } from './content'

const Podcasts = () => {
  return (
    <>
      <h2 className="font-serif font-semibold text-4xl text-stone-700 mt-40 mb-8">
        Podcasts I&apos;m in
      </h2>
      <ul className="border-t-[1px] border-solid border-stone-300">
        {PODCASTS.map((podcast, i) => (
          <li key={i}>
            <Link
              className="hover:bg-stone-100 transition-all flex gap-6 justify-between px-10 items-center border-b-[1px] py-5 border-solid border-stone-300"
              href={podcast.url}
              target="_blank"
            >
              <div className="flex items-center">
                <Image
                  src={podcast.image}
                  width={48}
                  height={48}
                  className="object-cover rounded-md mr-6 h-12 w-12"
                  alt=""
                />
                <div>
                  <p className="text-stone-700 font-semibold text-lg">
                    {podcast.title}
                  </p>
                  <p className="text-stone-500">{podcast.host}</p>
                </div>
              </div>
              <div className="text-stone-500 flex gap-6 shrink-0">
                <p>{podcast.length}</p>
                <IconBrandSpotify stroke={1.5} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Podcasts
