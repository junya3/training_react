import data from "@data/accessGuide";
import styles from "./AccessGuide.module.css";

const AccessInner = () => {
  return (
    <>
      <ul className={styles.items}>
        {
          data.map((item) => (
            <li key={item.name} className={styles.item}>
              <h3>{item.name}</h3>
              <ul>
                {item.text.map((text,index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default AccessInner;