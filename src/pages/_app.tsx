import { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/main.css";

const Application = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default Application;
