import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/600.css";
import "../style/index.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
