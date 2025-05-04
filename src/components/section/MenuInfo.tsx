import CardGrid2 from "../parts/CardGrid2";
import MenuInfoInner from "@components/parts/MenuInfoInner";
import styles from "./MenuInfo.module.css";

const MenuInfo = () => {
  return (
    <>
      <section className={styles.Menu}>
        <CardGrid2>
            <MenuInfoInner />
        </CardGrid2>
      </section>
    </>
  )
}

export default MenuInfo;