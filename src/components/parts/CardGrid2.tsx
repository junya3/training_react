import { ReactNode } from "react";
import styles from "./CardGrid2.module.css";

const CardGrid2 = ({children} : { children : ReactNode}) => {
    return (
        <>
            <ul className={styles.CardGrid2}>
                {children}
            </ul>
        </>
    )
}

export default CardGrid2;