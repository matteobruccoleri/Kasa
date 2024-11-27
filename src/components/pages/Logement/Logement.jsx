import { useParams, Navigate } from "react-router-dom";
import Logements from "../../../data/logements.js";
import styles from "./Logement.module.scss";
import Tags from "../../molecules/Tags/Tags.jsx";


function Logement() {
    const { id } = useParams(); // Récupère l'ID comme une chaîne de caractères
    const logement = Logements.find((logement) => logement.id === id);

    console.log("Logement trouvé :", logement);

    if (!logement) {
        return <Navigate to="/not-found" />;
    }

    return (
        <main className={styles.logement}>
            <img src={logement.cover} alt={logement.title} />
            <div className={styles.fiche_wrapper}>
                <div className={styles.title_wrapper}>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className={styles.name_wrapper}>
                    <p>{logement.host.name}</p>
                    <p>{logement.host.picture}</p>
                </div>
            </div>
            <Tags tags={logement.tags} />
            <p>{logement.description}</p>
        </main>
    );
}

export default Logement;
