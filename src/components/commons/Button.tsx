import Link from "next/link";
import styles from "./Button.module.css";

const Button = ( { children, href, solid, center }:{children: React.ReactNode,href:string,solid? :boolean, center?:boolean}) => {
  const solidClass = solid ? `${styles.btn} ${styles.solid}` : styles.btn;
  const centerClass = center ? `${solidClass} ${styles.center}` : solidClass;

  const outClass = centerClass;
  return (
    <>
      <Link className={outClass} href={href}>
        {children}
      </Link>
    </>
  )
}

export default Button;