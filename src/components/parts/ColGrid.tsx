import Image from "next/image";
import styles from "./ColGrid.module.css";

type Item = {
  icon: string;
  name: string;
  text: string;
};

const Grid3 = ({ items, center }: { items: Item[], center?:boolean }) => {
  // ここでitemの個数を数えます。
  const colCount = items.length;
  const Mode = center ? `${styles.grid} ${styles.center}` : styles.grid;
  const span = items[1].icon ? 4 : 3;
  return (
    <ul 
      className={Mode} 
      style={{ 
        gridTemplateColumns: `repeat(${colCount}, 1fr)`,
      }}
      >
      {items.map((item, index) => (
        <li
          key={index}
          style={{gridRow:`span ${span}`}}
          >
          {/* アイコンがあるならここに表示（画像でもOK） */}
          {item.icon && <Image src={item.icon} alt="" />}
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Grid3;
