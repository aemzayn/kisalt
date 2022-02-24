import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "../style/index.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "config/next-seo.config";
import { AlertProvider } from "context/AlertContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </AlertProvider>
  );
}
