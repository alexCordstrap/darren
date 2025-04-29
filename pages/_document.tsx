import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Cordstrap Application Photos"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Cordstrap Applications Photos"
          />
          <meta property="og:title" content="Cordstrap Applications Photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cordstrap Applications Photos" />
          <meta
            name="twitter:description"
            content="See pictures from Cordstrap lashing, strapping, and dunnage applications across all modes of transport"
          />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
