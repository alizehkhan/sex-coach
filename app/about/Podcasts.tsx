import Link from 'next/link'
import Image from 'next/image'
import { IconBrandSpotify } from '@tabler/icons-react'
import { PODCASTS } from './content'

const Podcasts = () => {
  return (
    <>
      <h2 className="font-serif font-semibold text-4xl text-stone-700 mt-40 mb-8">
        🎙️ Podcasts I'm in
      </h2>
      <div className="border-t-[1px] border-solid border-stone-300">
        {PODCASTS.map((podcast, i) => (
          <Link
            key={i}
            className="hover:bg-stone-100 transition-all flex gap-6 justify-between px-10 items-center border-b-[1px] py-4 border-solid border-stone-300"
            href={podcast.url}
            target="_blank"
          >
            <div className="flex items-center">
              <Image
                src={podcast.image}
                width={56}
                height={56}
                className="object-cover rounded-md mr-6"
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
        ))}
      </div>
    </>
  )
}

export default Podcasts
