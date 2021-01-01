import Link from 'next/link'
import breakpoints from '../styles/breakpoints'

export type Article = {
  title: string
  summary: string
  slug: string
}

const Card = ({
  children,
  slug,
}: {
  children: JSX.Element[] | JSX.Element
  className?: string
  slug: string
}) => (
  <div className="card-container">
    <style jsx>{`
      .card-container {
        padding: var(--theme-space);
        width: 100%;
      }
      @media ${breakpoints.up('md')} {
        .card-container {
          width: 50%;
        }
      }
      .card {
        display: block;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;

        border-radius: var(--theme-space);
        box-shadow: rgba(var(--primary-foreground)) 0px 0px 4px -2px;
      }

      a {
        display: block;
        padding: var(--theme-space-4);
        background-color: rgba(var(--foreground-min-solid));
        height: 100%;

        text-decoration: none;
        border-radius: var(--theme-space);
        color: rgba(var(--primary-foreground));
      }
      a:hover {
        color: rgba(var(--highlight-accent));
      }
    `}</style>
    <div className="card">
      <Link href={slug}>
        <a>
          <div>{children}</div>
        </a>
      </Link>
    </div>
  </div>
)

const Body = ({ children }: any) => (
  <p>
    <style jsx>{`
      margin-bottom: 0;
    `}</style>
    {children}
  </p>
)

const Preview = ({ title, articles = [], filter = 'article' }: any) => {
  return (
    <section className="preview">
      <style jsx>{`
        .container {
          /*TODO change negative margin*/
          margin: 0px -4px;
          display: flex;
          flex-wrap: wrap;

          margin-bottom: var(--theme-space-8);
        }
      `}</style>
      <style jsx global>{``}</style>
      <h2>{title}</h2>
      <div className="container">
        {articles
          .filter((a) => a.type === filter)
          .map(({ title, slug, summary }: Article) => (
            <Card key={title} slug={slug}>
              <h3>{title}</h3>
              <Body>{summary}</Body>
            </Card>
          ))}
      </div>
    </section>
  )
}

export default Preview
