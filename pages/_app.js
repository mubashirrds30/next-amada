import Head from "next/head";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/scss/custom.scss";
const { NEXT_PUBLIC_GOOGLE_ANALYTICS } = process.env;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./static/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQ7F7XCH9J"></script>
          <script
          dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-NQ7F7XCH9J');
          `,
            }}
         />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
