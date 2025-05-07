import { useState } from "react";
import styles from "./Burger.module.css"; // CSSモジュールのインポート

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive((prev) => !prev); // active状態をトグル
  };

  return (
    <button
      className={`${styles.burger} ${isActive ? styles.active : ""}`} // activeクラスを追加
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
