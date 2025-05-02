import styles from "./CardGrid2.module.css";
type Content = {
    title: string,
    date?: string,
    content: string[],
}

const CardGrid2 = ({content}: {content:Content[]}) => {
    return (
        <>
            <ul className={styles.CardGrid2}>
                {content.map((item) => (
                    <li key={item.title}>
                        <p><time>{item.date}</time></p>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CardGrid2;