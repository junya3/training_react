import Right from "@/components/parts/Right";
import Image from "next/image";
import styles from "./Col2.module.css";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ← 登録必須！

type DataContent = {
  title: string;
  subTitle: string;
  text: string[];
  href?: string;
  btnText?: string;
  owner?: string;
};

type DataImage = {
  src: string;
  alt: string;
};

const Col2 = ({
  content,
  image,
  dark,
  reverse,
}: {
  content: DataContent;
  image: DataImage;
  dark?: boolean;
  reverse?: boolean;
}) => {
  const darkMode = dark ? `${styles.col2} ${styles.dark}` : styles.col2;
  const mode = reverse ? `${darkMode} ${styles.reverse}` : darkMode;

  const container = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%", // 画面の80%の位置で発火
          toggleActions: "play none none none",
        }
      });

      tl.from(rightRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }).from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
      }, "-=0.4");
    }, container); // ← scope指定

    return () => ctx.revert(); // クリーンアップ
  }, []);

  return (
    <section className={mode} ref={container}>
      <div ref={rightRef}>
        <Right
          title={content.title}
          subTitle={content.subTitle}
          text={content.text}
          href={content.href}
          btnText={content.btnText}
          owner={content.owner}
          dark={dark}
        />
      </div>
      <div ref={imageRef}>
        <Image
          src={image.src}
          alt={image.alt}
          width={616}
          height={467}
        />
      </div>
    </section>
  );
};

export default Col2;