import data from "@data/shopData";
import styles from "./Shop.module.css"
import SecTitle from "../parts/SecTitle";
import ShopCol from "../parts/ShopCol";
import Image from "next/image";
 
const Shop = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.right}>
          <SecTitle title="店舗情報" subTitle="BAKERY NICORI へのアクセス"/>
          <ShopCol title="住所">
            <address>
              {
                data.access.address.map((item, index) => (
                  <div key={index}>{item}</div>
                ))
              }
              {data.access.direction}
            </address>
          </ShopCol>
          <ShopCol title="営業時間">
            <ul>
            {data.business.time.map(({ day, label, time }) => (
                <li key={day}>
                    <time itemProp="openingHours" dateTime={`${day} ${time}`}>
                        {label} {time.replace("-", " - ")}
                    </time>
                </li>
                ))}
            </ul>
            <p>※商品がなくなり次第閉店することがあります</p>
          </ShopCol>
          <ShopCol title="電話番号">
            <p>{data.business.tel}</p>
          </ShopCol>
          <ShopCol title="メールアドレス">
            <p>{data.business.mail}</p>
          </ShopCol>
        </div>
        <Image src={data.image.src} alt={data.image.alt} width={616} height={467}/>
      </section>
    </>
  )
}

export default Shop;