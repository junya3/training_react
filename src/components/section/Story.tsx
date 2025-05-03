import Col2 from "@/components/section/Col2";
import data from "@data/store";
const content = data.content;
const image = data.image;

const Story = () => {
  return (
    <>
      <Col2 
        content={content}
        image={image}
      />
    </>
  )
}

export default Story;