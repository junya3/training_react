import news from "@/data/news";

const NewsItem = () => {
  return (
    <>
      {news.map((item) => (
          <li key={item.title}>
              <p><time>{item.date}</time></p>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
          </li>
      ))}
    </>
  )
}

export default NewsItem;