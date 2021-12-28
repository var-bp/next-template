import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '../styles/globals.css'

// https://css-tricks.com/how-to-favicon-in-2021/
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/manifest.webmanifest" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
