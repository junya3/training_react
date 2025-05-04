import data from "@data/drinkList";
import styles from "./DrinkMenuItems.module.css";

const DrinkMenuItems = () => {
  return (
    <>
      <div className={styles.items}>
        {
          data.map((menu) => (
            <article key={menu.category}>
              <h3>{menu.category}</h3>
              <dl>
                {
                  menu.items.map((item) => (
                    <div key={item.name} className={styles.item}>
                      <dt>{item.name}</dt>
                      <dd>{item.price}</dd>
                    </div>
                  ))
                }
              </dl>
            </article>
          ))
        }
      </div>
    </>
  )
}

export default DrinkMenuItems;