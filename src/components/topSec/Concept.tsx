import Right from "@/components/parts/Right";
import Image from "next/image";
import ConceptPhoto from "@assets/images/topPage/top01.png";


// 内部コンテンツにコンテンツのテキストを入れてください。
const content = {
  title: "毎日の食卓に、ちょっとした幸せを",
  subTitle: "素材へのこだわりと、丁寧な製法で焼き上げる NICORI のパン",
  text : [
    "BAKERY NICORIは、毎日の食卓に小さな幸せを届けたいという想いから生まれました。 厳選された国産小麦、自家製天然酵母、地元の新鮮な食材を使用し、 ひとつひとつ丁寧に焼き上げています。",
    "パンを通じて、人々の笑顔につながりますように。 そんな気持ちを込めて、今日も心を込めてパンを焼いています。"
  ],
  href : "/about/",
  btnText : "もっと詳しく"
}

const Concept = () => {
  return (
    <>
      <section id="concept" className="col-2">
          <Right
            title={content.title}
            subTitle={content.subTitle}
            text={content.text}
            href={content.href} 
            btnText={content.btnText}
          >
          </Right>
          <Image src={ConceptPhoto} alt="焼き立てのパンの写真が写っています。"></Image>
      </section>
    </>
  )
}

export default Concept;