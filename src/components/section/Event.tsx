import CenterTitle from "../parts/CenterTitle";
import ItemGrid from "../parts/ItemGrid";
import Button from "../commons/Button";
import data from "@data/eventList";
import styles from "./Event.module.css";

const title = "カフェイベント";
const subTitle = "定期開催の特別企画";

const Event = () => {
  return (
    <>
      <section className={styles.section}>
        <CenterTitle
          title={title}
          subTitle={subTitle}
          white
        />
        <ItemGrid 
          content={data}
        />
        <Button href="/access/#contact" solid center>イベント詳細・ご予約へ</Button>
      </section>
    </>
  )
}

export default Event;