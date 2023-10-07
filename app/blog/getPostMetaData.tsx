import fs from 'fs'

import matter from 'gray-matter'

export interface PostMetadata {
  title: string
  date: string
  description: string
  slug: string
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'app/_posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`app/_posts/${fileName}`, 'utf8')
    const { data } = matter(fileContents)
    return {
      title: data.title,
      date: data.date,
      description: data.description,
      slug: fileName.replace('.mdx', ''),
    }
  })

  return posts
}

export default getPostMetadata
