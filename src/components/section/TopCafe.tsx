import Col2 from "@/components/section/Col2";
// 内部コンテンツにコンテンツのテキストを入れてください。
import data from "@data/topCafeData";
const content = data.content;
const image = data.image

const TopCafe = () => {
  return (
    <>
      <Col2 content={content} image={image} dark/>
    </>
  )
}

export default TopCafe;