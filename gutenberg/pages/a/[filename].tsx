import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import router from 'next/router'
import renderToString from 'next-mdx-remote/render-to-string'
import { mdxOptions } from '../../plugins/options'
import { getArticleFilenames, getFile } from '../../data'
import { articleDir } from '../../data/' //TODO, move this to getFile, etc
import Article, { components } from '../../components/Article'

if (process.browser) {
  window.onfocus = () => router.replace(router.asPath)
}

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  source,
  title,
  summary,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={summary} />
        <meta property="og:title" content={summary} />
      </Head>
      <style jsx>{`
        margin: 16px;
      `}</style>
      <main className="root">
        <Article source={source} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const articles = await getArticleFilenames()

  return {
    paths: articles.map((filename) => ({
      params: {
        filename,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, ...rest } = await getFile(
    `${articleDir}/${params?.filename}`
  )

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions,
  })
  console.log(`refreshing '${rest.title}': len:${content.length}.`)

  return { props: { source: mdxSource, ...rest }, revalidate: 1 }
}

export default ArticlePage
