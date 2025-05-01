import Image from "next/image";
import Image01 from "@assets/images/breads/1.png";
import Image02 from "@assets/images/breads/2.png";
import Image03 from "@assets/images/breads/3.png";
import Image04 from "@assets/images/breads/4.png";
import Image05 from "@assets/images/breads/5.png";
import Image06 from "@assets/images/breads/6.png";
import styles from "./CardGrid.module.css";

const ImageArray = [
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
];

type BreadItem = {
  en: string;
  ja: string;
  type: string;
  image: number;
  detail: string;
};

const CardGrid = ({ items }: { items: BreadItem[] }) => {
  return (
    <ul className={styles.CardGrid}>
      {items.map((item) => (
        <li key={item.en}>
          <Image
            src={ImageArray[item.image - 1]}
            alt={`${item.ja}の写真です。`}
            width={300}
            height={200}
          />
          <div className="item-text">
            <p className="en">{item.en}</p>
            <p className="ja">{item.ja}</p>
            <p className="detail">{item.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardGrid;
