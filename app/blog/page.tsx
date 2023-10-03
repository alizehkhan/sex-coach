import Image from 'next/image'
import Link from 'next/link'

import { BLOGS } from './content'

const Blog = () => {
  return (
    <div className="max-w-[1200px] px-6 mx-auto">
      <h1 className="font-serif text-5xl font-semibold my-8 text-stone-700 tracking-tight md:text-7xl">
        Blog
      </h1>
      <ul className="border-t-[1px] border-solid border-stone-300 max-w-[700px]">
        {BLOGS.map((blog, i) => (
          <li key={i} className="list-none">
            <Link
              href={blog.url}
              className="py-8 flex gap-6 border-stone-300 border-solid border-b-[1px]"
            >
              <Image
                src={blog.image}
                className="w-52 h-36 object-cover shrink-0"
                width={208}
                height={144}
                alt=""
              />
              <div>
                <h2 className="text-2xl font-semibold mb-1 font-serif text-stone-700">
                  {blog.title}
                </h2>
                <p className="text-stone-500">{blog.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
