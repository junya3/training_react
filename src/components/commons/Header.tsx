import { navList } from "@data/navList";
import Burger from "@components/parts/Burger";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ title }: { title: string }) {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <nav>
          <Burger />
          <ul>
            {navList.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
