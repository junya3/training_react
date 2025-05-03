import GridSec from "../parts/GridSec";
import data from "@data/ourValue";

const OurValue = () => {
  return (
    <>
      <GridSec
        title={data.title}
        subTitle={data.subTitle}
        items={data.items}
        center
      />
    </>
  )
}

export default OurValue;