import styles from "./SecTitle.module.css";

const SecTitle = ({title,subTitle}:{title:string,subTitle?:string}) => {
  return (
    <>
      <hgroup className={styles.secTitle}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </hgroup>
    </>
  )
}
export default SecTitle;