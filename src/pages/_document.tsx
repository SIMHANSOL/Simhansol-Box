import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv={"X-UA-Compatible"} content={"IE=Edge"} />
          <meta charSet={"UTF-8"} />

          <meta name={"robots"} content={"index,follow"} />
          <meta name={"yeti"} content={"index,follow"} />

          <meta name={"author"} content={"https://github.com/SIMHANSOL"} />
          <meta name={"keyword"} content={"simhansol, portfolio, it, web, develop, development, frontend"} />

          <meta property={"og:type"} content={"website"} />
          <meta name={"twitter:card"} content={"summary"} />

          <link rel={"icon"} type={"image/x-icon"} href={"/images/meta/favicon.ico"} />
          <link rel={"shortcut icon"} type={"image/x-icon"} href={"/images/meta/favicon.ico"} />

          <meta name={"apple-mobile-web-app-capable"} content={"yes"} />

          <link rel={"manifest"} href={"/manifest.json"} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
