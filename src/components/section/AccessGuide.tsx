import CardGrid2 from "../parts/CardGrid2";
import AccessInner from "@/components/parts/AccessInner";
import CenterTitle from "../parts/CenterTitle";
import styles from "./AccessGuide.module.css";

const title = "アクセスガイド";
const subTitle = "ご来店の際の道案内";

const AccessGuide = () => {
  return(
    <>
      <section className={styles.section}>
        <CenterTitle
          title={title}
          subTitle={subTitle}
        />
        <CardGrid2>
          <AccessInner/>
        </CardGrid2>
      </section>
    </>
  )
}

export default AccessGuide;