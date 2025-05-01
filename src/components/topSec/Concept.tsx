import SecTitle from "@/components/parts/SecTitle";
import Button from "@/components/commons/Button";
import Image from "next/image";
import ConceptPhoto from "@assets/images/topPage/top01.png";

const Concept = () => {
  return (
    <>
      <section id="concept" className="col-2">
        <div className="c_text">
          <SecTitle 
          title="毎日の食卓に、ちょっとした幸せを"
          subTitle="素材へのこだわりと、丁寧な製法で焼き上げる NICORI のパン"/>
          <p>
            BAKERY NICORIは、毎日の食卓に小さな幸せを届けたいという想いから生まれました。 厳選された国産小麦、自家製天然酵母、地元の新鮮な食材を使用し、 ひとつひとつ丁寧に焼き上げています。
          </p>
          <p>
            パンを通じて、人々の笑顔につながりますように。 そんな気持ちを込めて、今日も心を込めてパンを焼いています。
          </p>
          <Button href="/about/">もっと詳しく</Button>
        </div>
        <Image src={ConceptPhoto} alt="焼き立てのパンの写真が写っています。"></Image>
      </section>
    </>
  )
}

export default Concept;