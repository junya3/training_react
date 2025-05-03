import styles from "./Right.module.css";
import SecTitle from "@/components/parts/SecTitle";
import Button from "@components/commons/Button";

const Right = ({title, subTitle, text, href, btnText, dark}:{title:string,subTitle:string, text:string[], href:string,btnText?:string, dark?:boolean}) => {
  const Mode = dark ? `${styles.right} ${styles.dark}` : styles.right;
  return (
    <>
    <div className={Mode}>
      <SecTitle title={title} subTitle={subTitle}/>
      {text.map((innerText:string) => (
        <p key={innerText}>{innerText}</p>
      ))}
      {/* darkモードだったらsolid */}
      <Button href={href} solid={ dark ? true : false }>{btnText}</Button>
    </div>
    </>
  )
}

export default Right;