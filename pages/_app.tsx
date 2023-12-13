import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
              <link rel="icon" href="/favicon.ico" />
              <meta name="google-site-verification" content="slGOfNuGEAUl2qKewcGRYOyvCaWee0lSrs1ilUMJ4g4" />
              <meta name="keywords" content="Tahmid,Tahmid Rahman,Rahman,Tahmid Rahman Designs, Tahmid Rahman Graphic Designer, Top level Graphic Designer, Graphic Designer Bangladesh" />
              <title>Tahmid Rahman</title>
              <meta name="title" content="Tahmid Rahman - Dev + igner" />
              <meta name="description" content="Tahmid Rahman is a full-stack developer & graphic designer, hails from Bangladesh and is currently residing in Malaysia." />
              <meta property="og:locale" content="en_US" />
              <meta property="og:site_name" content="Tahmid Rahman" />
              <meta property="og:type" content="website" />
              <meta name="twitter:site" content="@Tahmid Rahman" />

              {/*Open Graph / Facebook*/}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://tahmidrahman.com" />
              <meta property="og:title" content="Tahmid Rahman - Visual Identity Designer" />
              <meta property="og:description" content="Tahmid Rahman is a full-stack developer & graphic designer, hails from Bangladesh and is currently residing in Malaysia." />
              <meta property="og:image" content="https://i.imgur.com/c2qIpiw.png" />

              {/*Twitter*/}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://tahmidrahman.com" />
              <meta property="twitter:title" content="Tahmid Rahman - Visual Identity Designer" />

              <meta name="author" content="Tahmid Rahman" />
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  )
}

export default MyApp
