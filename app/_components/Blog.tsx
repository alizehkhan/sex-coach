import { IconChevronRight } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

import getPostMetadata from '../blog/getPostMetaData'

const Blog = () => {
  const posts = getPostMetadata()

  return (
    <>
      <ul className="mt-40 flex w-full flex-col justify-between gap-6 md:flex-row md:gap-16">
        {posts.slice(0, 3).map((post, i) => (
          <li key={i} className="flex-1 list-none">
            <Link href={`/blog/${post.slug}`} className="flex flex-col gap-6">
              <Image
                src={`/blog/${post.slug}.png`}
                className="h-48 w-full shrink-0 rounded-sm object-cover"
                width={400}
                height={144}
                alt=""
              />
              <div>
                <h2 className="mb-1 font-serif text-2xl font-semibold text-stone-700">
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
        className="mt-8 flex w-fit items-center gap-1 py-2 text-lg font-semibold text-stone-600 underline underline-offset-8 transition-all hover:gap-4"
      >
        Blog
        <IconChevronRight stroke={1.5} />
      </Link>
    </>
  )
}

export default Blog
