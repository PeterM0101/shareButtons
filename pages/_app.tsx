import "../styles/globals.css";
import type { AppProps } from "next/app";
import {useEffect} from "react";
// import { init } from "@socialgouv/matomo-next";

// const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
// const MATOMO_URL = "https://sharebuttonshennavercelapp.matomo.cloud/";
// const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;
// const MATOMO_SITE_ID = '1'

export default function App({ Component, pageProps }: AppProps) {
    //
    // useEffect(() => {
    //   init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    // }, []);

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/sharebuttonshennavercelapp.matomo.cloud/container_LaJCRj3K.js'; s.parentNode?.insertBefore(g,s);

    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="https://sharebuttonshennavercelapp.matomo.cloud/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '1']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src='https://cdn.matomo.cloud/sharebuttonshennavercelapp.matomo.cloud/matomo.js'; s.parentNode?.insertBefore(g,s);
    })();
  }, [])
  return <Component {...pageProps} />;
}
