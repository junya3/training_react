import { ReactNode } from "react";
import styles from "./ShopCol.module.css";

const ShopCol = ({title, children}:{title:string, children:ReactNode}) => {
  return (
    <div className={styles.col}>
      <h3 className={styles.h3}>{title}</h3>
      {children}
    </div>
  )
}

export default ShopCol;