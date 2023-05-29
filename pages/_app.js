
import "../styles/globals.css"
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  
  return (
  <>
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-7K32FX1NCM');
        `,
      }}
    />
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
