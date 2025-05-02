import CardGrid2 from "@/components/parts/CardGrid2";
import CenterTitle from "@/components/parts/CenterTitle";
import news from "@/data/news";
import styles from "./News.module.css";

const title = "お知らせ";
const subTitle = "最新情報";

const News = () => {
    return (
        <>
            <section className={styles.News}>
                <CenterTitle title={title} subTitle={subTitle}/>
                <CardGrid2 content={news}/>
            </section>
        </>
    )
}

export default News;