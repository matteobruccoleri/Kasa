import Logements from "../../../data/logements.js";
import styles from "./ListLogements.module.scss";
function ListLogements () {
    return (
        <ul className={styles.ListLogements}>
            {Logements.map((logement) => (
                <li key={`${logement.id}`}>
                    <h3>{ logement.title }</h3>
                    <img src={ logement.cover }/>
                </li>
            ))}
        </ul>
    )
}

export default ListLogements;