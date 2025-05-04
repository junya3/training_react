import Col2 from "./Col2";
import data from "@data/cafeSpaceTop";

const SpaceTop = () => {
  return (
    <>
      <Col2 
        content={data.content}
        image={data.image}
      />
    </>
  )
}

export default SpaceTop;