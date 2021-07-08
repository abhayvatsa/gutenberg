import Link from 'next/link'

const Hero = ({ headline, text, about = false }) => {
  return (
    <>
      <style jsx>{`
        .hero {
          min-width: 320px;
          padding: var(--theme-space-16) var(--theme-space-4);
          text-align: center;
        }

        .headline {
          color: rgba(var(--highlight-hover), 1);
          font-size: 3em;
          line-height: 1;
        }

        p {
          font-size: 1.5em;
          line-height: 1;
          margin-bottom: 0px;
        }
        a {
          display: block;
          text-align: right;
        }
      `}</style>
      <section className="hero">
        <h1 className="headline">{headline}</h1>
        <p>{text}</p>
      </section>
      {about && (
        <Link href="/a/about">
          <a>About Me</a>
        </Link>
      )}
    </>
  )
}
export default Hero
