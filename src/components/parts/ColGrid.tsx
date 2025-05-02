import Image from "next/image";
import styles from "./ColGrid.module.css";

type Item = {
  icon: string;
  name: string;
  text: string;
};

const Grid3 = ({ items }: { items: Item[] }) => {
  // ここでitemの個数を数えます。
  const colCount = items.length;
  return (
    <ul 
      className={styles.grid} 
      style={{ 
        gridTemplateColumns: `repeat(${colCount}, 1fr)`,
      }}
      >
      {items.map((item, index) => (
        <li
          key={index}
          style={{gridRow:`span ${colCount}`}}
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
