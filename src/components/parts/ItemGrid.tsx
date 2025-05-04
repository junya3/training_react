import Image from "next/image";
import styles from "./ItemGrid.module.css";

type Content = {
  title: string,
  date: string,
  image: string,
  description: string,
}

const ItemGrid = ({content}: {content:Content[]}) => {
  return (
    <ul className={styles.ul}>
      {
        content.map((item) => (
          <li key={item.title}>
            <Image src={item.image} alt={`${item.title}について案内をしている写真`} width={410} height={200}/>
            <div className={styles.text}>
              <hgroup>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
              </hgroup>
              <p>{item.description}</p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default ItemGrid;