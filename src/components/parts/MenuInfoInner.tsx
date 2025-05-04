import data from "@data/menuInfo";
import styles from "./MenuInfoInner.module.css";

const MenuInfoInner = () => {
  return (
    <>
      <div className={styles.item}>
        <p>{data.title}</p>
        <ul>
          {
            data.items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default MenuInfoInner;