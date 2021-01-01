import Twitter from '../icons/Twitter'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import Gram from '../icons/Gram'

function parseLinks(links: string[]) {
  // TODO: improve this
  const linkedin = links.find((e) => e.indexOf('linkedin.com') >= 0)
  const github = links.find((e) => e.indexOf('github.com') >= 0)
  const twitter = links.find((e) => e.indexOf('twitter.com') >= 0)
  const gram = links.find((e) => e.indexOf('vatsagram.com') >= 0)

  return {
    linkedin,
    github,
    twitter,
    gram,
  }
}

const Footer = ({ links }) => {
  const { twitter, github, linkedin, gram } = parseLinks(links)

  return (
    <footer className="root">
      <style jsx>{`
        .root {
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          z-index: 1;
          padding: 0px var(--theme-space-4);
          min-height: var(--header-height);
          color: rgba(var(--primary-foreground), 1);
          font-size: 105%;
        }
      `}</style>
      <Twitter href={twitter} />
      <Github href={github} />
      <Linkedin href={linkedin} />
      <Gram href={gram} />
    </footer>
  )
}

export default Footer
