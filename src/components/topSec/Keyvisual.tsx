import styles from "./Keyvisual.module.css";
import Image from "next/image"
import KeyPhoto from "@assets/images/topPage/topBg.png";

const Keyvisual = () => {
  return (
    <div id="keyvisual" className={styles.keyvisual}>
      <Image src={KeyPhoto} alt="keyvisual" width={1440} height={1030} />
    </div>
  )
}

export default Keyvisual;