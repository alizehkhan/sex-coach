import Image from 'next/image'
import Link from 'next/link'

import getPostMetadata from './getPostMetaData'

const Blog = () => {
  const posts = getPostMetadata()

  return (
    <div className="max-w-[1200px] px-6 mx-auto">
      <div className="ml-auto flex justify-between mt-16">
        <h1 className="font-serif text-5xl text-stone-700 tracking-tight md:text-7xl">
          Blog
        </h1>
        <ul className="border-t-[1px] border-solid border-stone-300 max-w-[700px]">
          {posts.map((post, i) => (
            <li key={i} className="list-none">
              <Link
                href={`/blog/${post.slug}`}
                className="py-8 flex gap-6 border-stone-300 border-solid border-b-[1px]"
              >
                <Image
                  src={`/blog/${post.slug}.png`}
                  className="w-52 h-36 object-cover shrink-0 rounded-sm"
                  width={208}
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
      </div>
    </div>
  )
}

export default Blog
