import Link from 'next/link'
import { useIsScrolled } from '../hooks'

const Header = ({ domainName }) => {
  const isScrolled = useIsScrolled()

  return (
    <header className="root">
      <style jsx>{`
        .root {
          top: 0;
          position: fixed;
          width: 850px; /* TODO: magic number */
          background-color: rgba(var(--primary-background), 1);
        }

        .is-scrolled {
          box-shadow: rgba(var(--primary-foreground)) 0px 4px 6px -6px;
        }

        .nav {
          display: flex;
          justify-content: left;
          align-items: center;

          padding: 0px var(--theme-space-4);
          min-height: var(--header-height);
        }

        color: rgba(var(--primary-foreground), 1);
        font-size: 105%;

        .link:hover {
          /*font-size: 90%;*/
          color: rgba(var(--highlight), 1);
        }
        a {
          text-decoration: none;
        }
      `}</style>
      <nav className={`nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <Link key="/" href="/">
          <a className="link" href="/">
            <div>{domainName}</div>
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
