import styles from "./Footer.module.css";
import shopData from "@data/shopData";
const shop = shopData.shop;
const business = shopData.business;
const access = shopData.access;

const Footer = () => {
    return (
        <>
            <footer className={styles.Footer}>
                <hgroup>
                    <h1>{shop.name}</h1>
                    <p>
                        {shop.concept.map((span) => (
                            <span>{span}</span>
                        ))}
                    </p>
                </hgroup>
                <div className={styles.business}>
                    <p>営業情報</p>
                    <div className={styles.b_text}>
                        <p>営業時間</p>
                        <ul>
                        {shopData.business.time.map(({ day, label, time }) => (
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
                    <p>アクセス</p>
                    <div>
                        <p>{access.address}</p>
                        <p>{access.direction}</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;