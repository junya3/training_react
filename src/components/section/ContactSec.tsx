import Button from "../commons/Button";
import CenterTitle from "../parts/CenterTitle";
import FormInput from "../parts/FormInput";
import styles from "./ContactSec.module.css";

const title = "お問い合わせ";
const subTitle = "ご質問やご予約はこちらから";

const ContactSec = () => {
  return (
    <>
      <section id="contact">
        <CenterTitle
          title={title}
          subTitle={subTitle}
        />
        <form className={styles.formWrap}>
          <div className={styles.colGroup}>
            <FormInput htmlFor="name" label="お名前" type="text" placeholder="田中　太郎" require/>
            <FormInput htmlFor="email" label="メールアドレス" type="email" placeholder="tanaka@example.com" require/>
          </div>
          <FormInput htmlFor="subject" label="件名" type="text" require/>
          <FormInput htmlFor="content" label="お問い合わせ内容" type="textarea" rows={5} require/>
          <Button href="/" max center>送信する</Button>
        </form>
      </section>
    </>
  )
}

export default ContactSec;