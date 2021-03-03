import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark' // https://github.com/PrismJS/prism-themes

// See: https://mdxjs.com/guides/syntax-highlighting#prism-react-renderer
const CodeBlock = ({ children, className }) => {
  const language = className?.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {
            // TODO: this slicing needs to be less hacky (why does an extra
            // token exist?)
            tokens.slice(0, tokens.length - 1).map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))
          }
        </pre>
      )}
    </Highlight>
  )
}

// Enhance appearance of h1 and add semantic meaning
export const Heading1 = ({ children }) => {
  // TODO: I don't like styling/classes at the component level
  return (
    <header className="article-header-container">
      <h1 className="article-header">{children}</h1>
    </header>
  )
}

// Enable client-side routing for anchor tags
export const NextLink = ({ children, href, rel, target }) => {
  // TODO: double check if this is necessary
  const link =
    href.startsWith('#') && process.browser
      ? window.location.pathname + href
      : href

  // TODO: double check props below
  return (
    <Link href={link}>
      <a href={href} rel={rel} target={target}>
        {children}
      </a>
    </Link>
  )
}

export const components = {
  h1: Heading1,
  a: NextLink,
  code: CodeBlock,
}

const Article = ({ source }) => {
  const content = hydrate(source, { components })

  return (
    // TODO: revisit these globals
    <article>
      <style global jsx>{`
        .article-header-container {
          padding: var(--theme-space-24) 0;
        }
        article {
          margin-bottom: var(--theme-space-8);
        }
        .article-header {
          text-align: center;
          margin: 0;
          font-size: 2.5em;
          color: rgba(var(--highlight), 1);
        }

        pre {
          border-radius: var(--theme-space-4);
          width: 100%;
          overflow-x: scroll;
        }
        table {
          display: block;
          overflow: auto;
        }
      `}</style>
      {content}
    </article>
  )
}

export default Article
