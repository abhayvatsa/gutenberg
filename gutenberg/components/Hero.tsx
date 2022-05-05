import Link from 'next/link';

const Button = () => (
  <>
    <style jsx>{`
      .button {
        align-self: flex-end; /* TODO: align-self should be a parameter*/
        border-radius: var(--theme-space);
        display: inline-block;
        padding: var(--theme-space-4);
        background-color: rgba(var(--highlight-accent), 1);
      }

      a {
        color: rgba(var(--foreground-max));
        text-decoration: none;
        display: block;
        text-align: right;
      }
    `}</style>
    <div className="button">
      <Link href="/a/about">
        <a>About Me</a>
      </Link>
    </div>
  </>
);

const Hero = ({ headline, text, about = false }) => {
  return (
    <>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          min-width: 320px;
          padding: var(--theme-space-16) var(--theme-space-4);
          padding-bottom: var(--theme-space-8);
          text-align: center;
          align-items: center;
        }

        .headline {
          display: block;
          color: rgba(var(--highlight-hover), 1);
          font-size: 3em;
          line-height: 1;
        }

        p {
          font-size: 1.5em;
          line-height: 1;
        }
      `}</style>
      <section className="hero">
        <h1 className="headline">{headline}</h1>
        <p>{text}</p>
        {about && <Button />}
      </section>
    </>
  );
};

export default Hero;
