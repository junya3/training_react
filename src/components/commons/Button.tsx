import styles from "./Button.module.css";

const Button = ( { children, href, solid, center }:{children: React.ReactNode,href:string,solid? :boolean, center?:boolean}) => {
  const solidClass = solid ? `${styles.btn} ${styles.solid}` : styles.btn;
  const centerClass = center ? `${solidClass} ${styles.center}` : solidClass;

  const outClass = centerClass;
  return (
    <>
      <a className={outClass} href={href}>
        {children}
      </a>
    </>
  )
}

export default Button;