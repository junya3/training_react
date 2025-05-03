import Col2 from "./Col2";
import data from "@data/ownerMessageData";

const content = data.content;
const image = data.image;

const OwnerMessage = () => {
  return (
    <>
      <Col2 
        content={content}
        image={image}
      />
    </>
  )
}

export default OwnerMessage;