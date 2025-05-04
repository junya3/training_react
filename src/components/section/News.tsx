import CardGrid2 from "@/components/parts/CardGrid2";
import CenterTitle from "@/components/parts/CenterTitle";
import NewsItem from "@components/parts/NewsItem";
import styles from "./News.module.css";

const title = "お知らせ";
const subTitle = "最新情報";

const News = () => {
    return (
        <>
            <section className={styles.News}>
                <CenterTitle title={title} subTitle={subTitle}/>
                <CardGrid2>
                    <NewsItem/>
                </CardGrid2>
            </section>
        </>
    )
}

export default News;