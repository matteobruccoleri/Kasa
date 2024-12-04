import React, { useState } from 'react';

import { useParams, Navigate } from "react-router-dom";
import Logements from "../../../data/logements.js";
import styles from "./Logement.module.scss";
import Tags from "../../molecules/Tags/Tags.jsx";
import RatingStars from "../../atoms/RatingStars/RatingStars.jsx";
import Arrow from "../../../assets/images/arrow.png"
import Dropdown from '../../molecules/Dropdown/Dropdown.jsx';


function Logement() {
    const { id } = useParams(); // Récupère l'ID comme une chaîne de caractères
    const logement = Logements.find((logement) => logement.id === id);
    const [dropdown, setDropdown] = useState(false);


    function handleDropdown() {
        setDropdown(!dropdown)
        console.log(dropdown)
    }

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
                        <RatingStars rating={Number(logement.rating)} />
                    </div>
                </div>
            </div>
            <div className={styles.dropdown_wrapper}>
                <Dropdown 
                    title={"Description"}
                    src={Arrow}
                    text={logement.description}
                />
                <Dropdown 
                    title={"Équipements"}
                    src={Arrow}
                    text={logement.equipments}
                />
            </div>  
        </main>
    );
}

export default Logement;
