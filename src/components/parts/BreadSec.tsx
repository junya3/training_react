import CenterTitle from "@components/parts/CenterTitle";
import CardGrid from "@components/parts/CardGrid";
import Button from "@components/commons/Button";
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
        <Button href="/menu/" center>メニューをもっと見る</Button>
      </section>
    </>
  )
}
export default BreadSec;