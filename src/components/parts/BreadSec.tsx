import CenterTitle from "@components/parts/CenterTitle";
import CardGrid from "@components/parts/CardGrid";
import styles from "./BreadSec.module.css";

type BreadItem = {
  en: string;
  ja: string;
  type: string;
  image: number;
  detail: string;
};

const BreadSec = (
  {title,subTitle,items}
  :{title:string,subTitle:string,items:BreadItem[]}) => {
  return (
    <>
      <section className={styles.BreadSec}>
        <CenterTitle title={title} subTitle={subTitle}/>
        <CardGrid items={items}/>
      </section>
    </>
  )
}
export default BreadSec;