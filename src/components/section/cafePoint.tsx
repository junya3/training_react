import GridSec from "../parts/GridSec";
import data from "@data/cafeValueList";

const CafePoint = () => {
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

export default CafePoint;