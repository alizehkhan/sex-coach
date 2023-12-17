import Image from 'next/image'
import Link from 'next/link'

import getPostMetadata from './getPostMetaData'

const Blog = () => {
  const posts = getPostMetadata()

  return (
    <>
      <div className="flex h-[calc(100vh-80px)] items-end bg-[linear-gradient(180deg,rgba(0,0,0,0.00)45%,rgba(0,0,0,0.20)70%),url('/haneen/haneen-7.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="border-l-8 border-solid border-white pb-28 pl-8 pt-4 font-serif text-5xl text-white drop-shadow-lg md:text-[100px]">
            Blog
          </h1>
        </div>
      </div>

      <ul className="mx-auto mt-12 max-w-[700px]">
        {posts.map((post, i) => (
          <li key={i} className="list-none">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-6 border-b-[1px] border-solid border-stone-300 py-8 md:flex-row"
            >
              <Image
                src={`/blog/${post.slug}.png`}
                className="h-48 w-full shrink-0 rounded-sm object-cover md:h-36 md:w-52"
                width={208}
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
    </>
  )
}

export default Blog
