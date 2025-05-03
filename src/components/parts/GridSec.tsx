import CenterTitle from "@/components/parts/CenterTitle";
import Grid3 from "@/components/parts/ColGrid";
import styles from "./GridSec.module.css";


type Item = {
  icon: string;
  name: string;
  text: string;
};

const GridSec = ({title, subTitle,items,center}:{
  title: string,
  subTitle: string,
  items: Item[],
  center?: boolean
}) => {
  return (
    <>
    <section className={styles.GridSec}>
        <CenterTitle title={title} subTitle={subTitle}/>
        <Grid3 items={items} center={center}></Grid3>
    </section>
    </>
  )
}

export default GridSec;