import { useParams, Navigate } from "react-router-dom";
import Logements from "../../../data/logements.js";
import styles from "./Logement.module.scss";
import Tags from "../../molecules/Tags/Tags.jsx";
import RatingStars from "../../atoms/RatingStars/RatingStars.jsx"; // Import du composant
import Arrow from "../../../assets/images/arrow.png"
function Logement() {
    const { id } = useParams(); // Récupère l'ID comme une chaîne de caractères
    const logement = Logements.find((logement) => logement.id === id);

    console.log("Logement trouvé :", logement);

    if (!logement) {
        return <Navigate to="/not-found" />;
    }
    
    return (
        <main className={styles.logement}>
            <div className={styles.carrousel}>
                <img src={logement.cover} alt={logement.title} />
            </div>
            <div className={styles.fiche_wrapper}>
                <div className={styles.title_wrapper}>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Tags tags={logement.tags} />
                </div>
                <div className={styles.host_wrapper}>
                    <div className={styles.profil_wrapper}>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.title} />
                    </div>
                    <div className={styles.rating_wrapper}>
                        <RatingStars rating={logement.rating} />
                    </div>
                </div>
            </div>
            <div className={styles.dropdown_wrapper}>
                <div className={styles.dropdown_wrapper}>
                    <div className={styles.dropdown_item}>
                        <h3 className={styles.dropdown_title}>Description<img className={styles.chevron} src={Arrow} alt="flêche"/></h3>
                        <div className={styles.dropdown_text}>
                            <p>{logement.description}</p>
                        </div>
                    </div>
                </div>  
                <div className={styles.dropdown_wrapper}>
                    <div className={styles.dropdown_item}>
                        <h3 className={styles.dropdown_title}>Équipements<img className={styles.chevron} src={Arrow} alt="flêche"/></h3>
                        <div className={styles.dropdown_text}>
                            <p>{logement.equipments}</p>
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    );
}

export default Logement;
