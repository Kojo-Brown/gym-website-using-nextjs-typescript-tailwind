import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

const Document = () => {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"/>
      </body>
    </Html>
  )
}

export default Document