import styles from "./Button.module.css";

const Button = ( { children, href, solid }:{children: React.ReactNode,href:string,solid? :boolean}) => {
  const buttonClass = solid ? `${styles.btn} ${styles.solid}` : styles.btn;
  return (
    <>
      <a className={buttonClass} href={href}>
        {children}
      </a>
    </>
  )
}

export default Button;