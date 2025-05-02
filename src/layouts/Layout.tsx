import Header from "@components/commons/Header";
import Footer from "@components/commons/Footer";
// フォントの読み取り
import { M_PLUS_1 } from "next/font/google";


const mPlus1 = M_PLUS_1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // 使用したい太さを指定
  subsets: ["latin"], // サブセット（必要なら "latin-ext" や "japanese" など）
  display: "swap", // 推奨設定
});

const title = "Bakery NIKORI";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <body className={mPlus1.className}>
                <Header title={title}/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
            
        </>
    )
}

export default Layout;