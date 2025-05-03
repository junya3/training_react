import Right from "@/components/parts/Right";
import Image from "next/image";
import styles from "./Col2.module.css";

type DataContent = {
  title: string
  subTitle: string
  text: string[],
  href?: string,
  btnText?: string,
}
type DataImage = {
  src: string,
  alt: string
}


const Col2 = ({content,image, dark} : {content: DataContent, image:DataImage, dark?:boolean}) => {
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
          <Image src={image.src} alt="焼き立てのパンの写真が写っています。" width={616} height={467}></Image>
      </section>
    </>
  )
}

export default Col2;