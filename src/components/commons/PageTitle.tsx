import styles from "./PageTitle.module.css";

const PageTitle = ({pageTitle,pageSubTitle}:{
  pageTitle: string, pageSubTitle: string,
}) => {
  return (
    <>
      <hgroup className={styles.PageTitle}>
        <h1>{pageTitle}</h1>
        <p>{pageSubTitle}</p>
      </hgroup>
    </>
  )
}

export default PageTitle;