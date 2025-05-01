import Image from "next/image"
import KeyPhoto from "@assets/images/topPage/topBg.png";
import Button from "@/components/commons/Button";

const Keyvisual = () => {
  return (
    <div id="keyvisual">
      <Image src={KeyPhoto} alt="keyvisual" width={1440} height={1030} />
      <div className="k_inner">
        <hgroup>
          <h1>にこりと笑顔になる、やさしいパンを。</h1>
          <p>素材とまごころで、毎日に小さなごほうびを。</p>
        </hgroup>
        <div className="btn-flex">
          <Button href="/menu/">パンを見る</Button>
          <Button href="/about/" solid>当店について</Button>
        </div>
      </div>
    </div>
  )
}

export default Keyvisual;