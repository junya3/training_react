import Right from "@/components/parts/Right";
import Image from "next/image";
import itemImage from "@assets/images/topPage/top02.png";
import styles from "./Col2.module.css";

type DataContent = {
  title: string
  subTitle: string
  text: string[],
  href: string,
  btnText: string,
}


const Col2 = ({dark ,content} : {dark?:boolean, content: DataContent}) => {
  const mode = dark ? `${styles.col2} ${styles.dark}` : styles.col2;
  return (
    <>
      <section className={mode}>
          <Right
            title={content.title}
            subTitle={content.subTitle}
            text={content.text}
            href={content.href} 
            btnText={content.btnText}
            dark={dark}
          >
          </Right>
          <Image src={itemImage} alt="焼き立てのパンの写真が写っています。"></Image>
      </section>
    </>
  )
}

export default Col2;