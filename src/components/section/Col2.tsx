import Right from "@/components/parts/Right";
import Image from "next/image";
import styles from "./Col2.module.css";

type DataContent = {
  title: string
  subTitle: string
  text: string[],
  href?: string,
  btnText?: string,
  owner?: string,
}
type DataImage = {
  src: string,
  alt: string
}


const Col2 = ({content,image, dark, reverse} : {content: DataContent, image:DataImage, dark?:boolean, reverse?:boolean}) => {
  const darkMode = dark ? `${styles.col2} ${styles.dark}` : styles.col2;
  const mode = reverse ? `${darkMode} ${styles.reverse}` : darkMode;
  return (
    <>
      <section className={mode}>
          <Right
            title={content.title}
            subTitle={content.subTitle}
            text={content.text}
            href={content.href} 
            btnText={content.btnText}
            owner={content.owner}
            dark={dark}
          >
          </Right>
          <Image src={image.src} alt="焼き立てのパンの写真が写っています。" width={616} height={467}></Image>
      </section>
    </>
  )
}

export default Col2;