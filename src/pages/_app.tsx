import "@assets/css/reset.css";
import "@assets/css/style.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps}/>
    </>
    )
}
