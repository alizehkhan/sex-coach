import fs from 'fs'

import { IconArrowLeft } from '@tabler/icons-react'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

import getPostMetadata from '../getPostMetaData'

import Container from '@/app/_components/Container'
import { useMDXComponents } from '@/mdx-components'

const getPostContent = (slug: string) => {
  const file = `app/_posts/${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  return matter(content)
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
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
      <Image
        src={`/blog/${params.slug}.png`}
        height={500}
        width={800}
        className="w-full h-96 object-cover rounded-lg"
        alt=""
      />
      <article>
        <MDXRemote source={post.content} components={useMDXComponents()} />
      </article>
    </Container>
  )
}

export default PostPage
