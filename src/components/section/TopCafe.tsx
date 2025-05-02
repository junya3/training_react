import Right from "@/components/parts/Right";
import Image from "next/image";
import itemImage from "@assets/images/topPage/top02.png";


// 内部コンテンツにコンテンツのテキストを入れてください。
const content = {
  title: "カフェスペース",
  subTitle: "焼きたてパンとコーヒーを楽しむ時間",
  text : [
    "店内には木の温もりを感じるイートインスペースをご用意。 焼きたてのパンを、挽きたての香り高いコーヒーとともにお楽しみいただけます。 日常を忘れて、ゆっくりとした時間をお過ごしください。"
  ],
  href : "/cafe/",
  btnText : "カフェについて詳しく"
}

const Concept = () => {
  return (
    <>
      <section id="concept" className="col-2 dark">
          <Right
            title={content.title}
            subTitle={content.subTitle}
            text={content.text}
            href={content.href} 
            btnText={content.btnText}
            dark
          >
          </Right>
          <Image src={itemImage} alt="焼き立てのパンの写真が写っています。"></Image>
      </section>
    </>
  )
}

export default Concept;