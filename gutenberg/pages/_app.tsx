import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import router from 'next/router'
import globalStyles from '../styles/globals'
import { initialize, logPageView } from '../lib/analytics'
import Header from '../components/Header'
import Footer from '../components/Footer'
import theme from '../styles/theme'
import {
  domainName,
  owner,
  title,
  description,
  keywords,
  links,
} from '../config'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initialize()
    logPageView() // Initial page view
    router.events.on('routeChangeComplete', logPageView)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content={owner} />
      </Head>
      <style jsx global>
        {theme}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
      <Header domainName={domainName} />
      <Component {...pageProps} />
      <Footer links={links} />
    </>
  )
}
