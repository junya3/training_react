import styles from "./CenterTitle.module.css";

const CenterTitle = ({title,subTitle,white}:{title:string,subTitle?:string,white?:boolean}) => {
  const mode = white ? `${styles.CenterTitle} ${styles.white}` : styles.CenterTitle;
  return (
    <>
      <hgroup className={mode}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </hgroup>
    </>
  )
}
export default CenterTitle;