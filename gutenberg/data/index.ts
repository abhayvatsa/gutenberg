import fs from 'fs'
import matter from 'gray-matter'
import { promisify } from 'util'
const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
import { getHeading } from '../plugins/'
export const articleDir = `./a/`

export async function getArticles() {
  const filenames = await getArticleFilenames()
  const articlesPromises = filenames.map(async (f) =>
    getFile(`${articleDir}/${f}`)
  )

  const articles = await Promise.all(articlesPromises)
  return articles.sort(
    (a, b) =>
      new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
  )
}

export async function getArticleFilenames() {
  return readdir(articleDir)
}

interface Article {
  content: string
  publishTime: string
  summary: string
  title: string
  slug: string
  type: string
}

export async function getFile(filename: string): Promise<Article> {
  const source = await readFile(filename, 'utf-8')

  const title = await getHeading(source)
  const {
    content,
    data: { publishTime, summary, type = 'article' },
  } = matter(source)

  return {
    content,
    publishTime: publishTime,
    summary,
    slug: filename,
    title,
    type,
  }
}
