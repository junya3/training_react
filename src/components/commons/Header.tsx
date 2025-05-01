'use client'; // クライアントサイドにする必要あり

import { useEffect, useState } from "react";
import { navList } from "@data/navList";
import styles from "./Header.module.css";

export default function Header({ title }: { title: string }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isTop ? styles.whiteText : ""}`}>
      <h1>{title}</h1>
      <nav>
        <ul>
          {navList.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
