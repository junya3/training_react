import { navList } from "@data/navList";
import styles from "./Header.module.css";

export default function Header({ title }: { title: string }) {
  return (
    <>
      <header className={styles.header}>
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
    </>
  );
}
