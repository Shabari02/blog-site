import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          <meta name="og:title" content="shabari blog" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
