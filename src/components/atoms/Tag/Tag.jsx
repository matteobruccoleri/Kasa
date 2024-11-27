import styles from "./tag.module.scss"; 

function Tag({ tag }) {
    return <li className={styles.tag}>{tag}</li>;
}

export default Tag;