import { IconChevronRight } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

import getPostMetadata from '../blog/getPostMetaData'

const Blog = () => {
  const posts = getPostMetadata()

  return (
    <>
      <ul className="flex md:flex-row flex-col justify-between mt-24 md:gap-16 gap-6 w-full">
        {posts.slice(0, 3).map((post, i) => (
          <li key={i} className="list-none flex-1">
            <Link href={`/blog/${post.slug}`} className="flex flex-col gap-6">
              <Image
                src={`/blog/${post.slug}.png`}
                className="w-full h-48 object-cover shrink-0 rounded-sm"
                width={400}
                height={144}
                alt=""
              />
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-serif text-stone-700">
                  {post.title}
                </h2>
                <p className="text-stone-500">{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="text-stone-600 mt-8 w-fit py-2 hover:gap-4 transition-all font-semibold items-center text-lg flex gap-1 underline underline-offset-8"
      >
        See the full blog
        <IconChevronRight stroke={1.5} />
      </Link>
    </>
  )
}

export default Blog
