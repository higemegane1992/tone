import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.scss";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
