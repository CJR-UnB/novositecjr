import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add the Lora font link here */}
          <link rel="icon" href="public\favicon.ico" sizes="any" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
