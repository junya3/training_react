// フォントの読み取り
import { M_PLUS_1 } from "next/font/google";
import "@assets/css/reset.css";
import "@assets/css/style.css";

const mPlus1 = M_PLUS_1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // 使用したい太さを指定
  subsets: ["latin"], // サブセット（必要なら "latin-ext" や "japanese" など）
  display: "swap", // 推奨設定
});

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps}/>
    </>
    )
}
