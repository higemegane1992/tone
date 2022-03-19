import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "../styles/globals.css";
import "../styles/utils.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
