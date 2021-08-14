import {
  default as NextDocument,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { classes } from "../configs/classnames";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-touch-icon.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          className={`antialiased ${classes.background.light} ${classes.textBase}`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default Document;
