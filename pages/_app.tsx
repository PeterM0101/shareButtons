import "../styles/globals.css";
import type { AppProps } from "next/app";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/sharebuttonshennavercelapp.matomo.cloud/container_LaJCRj3K.js'; s.parentNode?.insertBefore(g,s);
  }, [])
  return <Component {...pageProps} />;
}
