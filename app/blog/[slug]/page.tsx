import fs from 'fs'

import { IconArrowLeft } from '@tabler/icons-react'
import matter from 'gray-matter'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

import Container from '@/app/_components/Container'
import { useMDXComponents } from '@/mdx-components'

const getPostContent = (slug: string) => {
  const file = `app/_posts/${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = getPostContent(params.slug)

  return (
    <Container>
      <Link href="/blog">
        <div className="p-4 border-2 w-fit border-solid border-stone-700 rounded-full hover:bg-stone-200">
          <IconArrowLeft />
        </div>
      </Link>
      <h1 className="my-8 font-serif text-5xl font-semibold text-stone-700 tracking-tight md:text-7xl">
        {post.data.title}
      </h1>
      <article>
        <MDXRemote source={post.content} components={useMDXComponents()} />
      </article>
    </Container>
  )
}

export default PostPage
