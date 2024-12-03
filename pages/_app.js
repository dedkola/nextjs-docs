import Script from "next/script";
import "../src/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
    <>
        <SpeedInsights />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-35JQN469E9"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-35JQN469E9');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
