import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Hero from '../components/Hero'
import Preview from '../components/Preview'
import { getArticles } from '../data'
import { headline, subtitle, sections, about } from '../config'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <main>
      <Hero about={about} headline={headline} text={subtitle} />
      {sections.map(({ filter, title }) => (
        <Preview
          key={title}
          articles={articles}
          title={title}
          filter={filter}
        />
      ))}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticles()

  return { props: { articles } }
}

export default Home
