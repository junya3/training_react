import Link from "next/link";
import styles from "./Footer.module.css";
import shopData from "@data/shopData";
const shop = shopData.shop;
const business = shopData.business;
const access = shopData.access;

const Footer = () => {
    return (
        <>
            <footer className={styles.Footer}>
                <div className={styles.FooterInner}>
                    <hgroup>
                        <h1 className={styles.title}>
                            <Link href="/">
                                {shop.name}
                            </Link>
                        </h1>
                        <p>
                            {shop.concept.map((span, index) => (
                                <span key={index}>{span}</span>
                            ))}
                        </p>
                    </hgroup>
                    <div className={styles.business}>
                        <p className={styles.title}>営業情報</p>
                        <div>
                            <p>営業時間</p>
                            <ul>
                            {business.time.map(({ day, label, time }) => (
                                <li key={day}>
                                    <time itemProp="openingHours" dateTime={`${day} ${time}`}>
                                        {label} {time.replace("-", " - ")}
                                    </time>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.access}>
                        <p className={styles.title}>アクセス</p>
                        <address>
                            <p>{access.address}</p>
                            <p>{access.direction}</p>
                        </address>
                    </div>
                </div>
                <small>
                    <p>&copy;2025 BAKERY NICORI All Rights Reserved.</p>
                </small>
            </footer>
        </>
    )
}

export default Footer;