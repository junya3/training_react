import news from "@/data/news";
import styles from "./NewsItem.module.css";

const NewsItem = () => {
  return (
    <>
      {news.map((item) => (
          <li key={item.title} className={styles.li}>
              <p><time>{item.date}</time></p>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
          </li>
      ))}
    </>
  )
}

export default NewsItem;