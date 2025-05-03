import styles from "./Right.module.css";
import SecTitle from "@/components/parts/SecTitle";
import Button from "@components/commons/Button";

const Right = ({title, subTitle, text, href, btnText,owner, dark}:{title:string,subTitle:string, text:string[], href?:string,btnText?:string, owner?:string, dark?:boolean}) => {
  const darkMode = dark ? `${styles.right} ${styles.dark}` : styles.right;
  const Mode = owner ? `${darkMode} ${styles.owner}` : darkMode;
  return (
    <>
    <div className={Mode}>
      <SecTitle title={title} subTitle={subTitle}/>
      {text.map((innerText:string) => (
        <p key={innerText}>{innerText}</p>
      ))}
      {owner && (
        <p className={styles.name}>{owner}</p>
      )}
      {/* darkモードだったらsolid */}
      {href && btnText && (
        <Button href={href} solid={!!dark}>
          {btnText}
        </Button>
      )}
    </div>
    </>
  )
}

export default Right;