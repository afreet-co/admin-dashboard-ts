import { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/main.css";
import Head from "next/head";

const Application = ({ Component, pageProps }: AppProps) => (
  <>
  <Head>
    <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_SITE_PREFIX}/favicon.ico`} type="image/x-icon" />
  </Head>
  <Component {...pageProps} />
  </>
);

export default Application;
