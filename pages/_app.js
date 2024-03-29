import "../styles/global.css"
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'

// setting loading animation

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
