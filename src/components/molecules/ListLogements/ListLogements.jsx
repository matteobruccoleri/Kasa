import { NavLink } from "react-router-dom";
import Logements from "../../../data/logements.js";
import styles from "./ListLogements.module.scss";

function ListLogements() {
    return (
        <ul className={styles.ListLogements}>
            {Logements.map((logement) => (
                <li key={logement.id}>
                    <NavLink to={`/Logement/${logement.id}`} className={styles.link}>
                        <h3>{logement.title}</h3>
                        <img src={logement.cover} alt={logement.title} />
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export default ListLogements;