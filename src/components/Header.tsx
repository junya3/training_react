import { navList } from "@data/navList";

export default function Header() {
  return (
    <>
      <header>
        <h1>NIKORI</h1>
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
