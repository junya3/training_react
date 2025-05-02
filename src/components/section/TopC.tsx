import Col2 from "@/components/section/Col2";
// 内部コンテンツにコンテンツのテキストを入れてください。
import content from "@data/topCafeData";

const TopC = () => {
  return (
    <>
      <Col2 content={content} dark/>
    </>
  )
}

export default TopC;