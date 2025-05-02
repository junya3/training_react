import GridSec from "@/components/parts/GridSec";
import points from "@data/points" ;

const Point = () => {
  return (
    <>
      <GridSec 
        title={points.title} 
        subTitle={points.subTitle}
        items={points.items}
      />
    </>
  )
}
export default Point;