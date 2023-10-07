import fs from 'fs'

import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

import getPostMetadata from '../getPostMetaData'

import Container from '@/app/_components/Container'

const getPostContent = (slug: string) => {
  const folder = 'app/_posts/'
  const file = `${folder}${slug}.mdx`
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
      <h1 className="my-10 font-serif text-5xl font-semibold text-stone-700 tracking-tight md:text-7xl">
        {post.data.title}
      </h1>
      <article>
        <MDXRemote source={post.content} />
      </article>
    </Container>
  )
}

export default PostPage
