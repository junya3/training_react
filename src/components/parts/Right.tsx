import styles from "./Right.module.css";
import SecTitle from "@/components/parts/SecTitle";
import Button from "@components/commons/Button";

const Right = ({title, subTitle, text, href, btnText}:{title:string,subTitle:string, text:string[], href:string,btnText?:string}) => {
  return (
    <>
    <div className={styles.right}>
      <SecTitle title={title} subTitle={subTitle}/>
      {text.map((innerText:string) => (
        <p>{innerText}</p>
      ))}
      <Button href={href}>{btnText}</Button>
    </div>
    </>
  )
}

export default Right;