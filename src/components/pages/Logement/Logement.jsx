import { useParams, Navigate } from "react-router-dom";
import Logements from "../../../data/logements.js";
import styles from "./Logement.module.scss";

function Logement() {
    const { id } = useParams(); // Récupère l'ID comme une chaîne de caractères
    const logement = Logements.find((log) => log.id === id); // Compare directement les chaînes

    console.log("ID récupéré :", id);
    console.log("Logement trouvé :", logement);

    if (!logement) {
        return <Navigate to="/not-found" />;
    }

    return (
        <main className={styles.logement}>
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
        </main>
    );
}

export default Logement;