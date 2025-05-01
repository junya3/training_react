import styles from "./CenterTitle.module.css";

const CenterTitle = ({title,subTitle}:{title:string,subTitle?:string}) => {
  return (
    <>
      <hgroup className={styles.CenterTitle}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </hgroup>
    </>
  )
}
export default CenterTitle;