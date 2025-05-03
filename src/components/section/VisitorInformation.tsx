import data from "@data/visitorInfo";
import Button from "../commons/Button";
import styles from "./VisitorInformation.module.css";

const VisitorInformation = () => {
  return (
    <>
      <section className={styles.section}>
        <p className={styles.title}>{data.title}</p>
        {data.text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div className={styles.btns}>
          {data.links.map((link, index) => (
            <Button key={index} href={link.href} solid={link.solid}>{link.btnText}</Button>
          ))}
        </div>
      </section>
    </>
  )
}

export default VisitorInformation;