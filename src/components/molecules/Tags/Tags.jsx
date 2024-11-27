//import Logements from "../../../data/logements.js"; 
import Tag from "../../atoms/Tag/Tag.jsx";
import styles from "./Tags.module.scss";

function Tags({ tags }) {

    return (
        <ul className={styles.tags}>
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </ul>
    );
}

export default Tags;