import React from "react";
import PropTypes from "prop-types";
import styles from "./RatingStars.module.scss";
import StarActive from "../../../assets/images/star-active.svg"
import StarInactive from "../../../assets/images/star-inactive.svg"

const RatingStars = ({ rating, totalStars = 5 }) => {
    // Génération des étoiles en fonction du rating
    const generateStars = () => {
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                <img
                    key={i}
                    src={i <= rating ? StarActive : StarInactive}
                    alt={i <= rating ? "Étoile active" : "Étoile inactive"}
                    className={styles.star}
                />
            );
        }
        return stars;
    };

    return <div className={styles.ratingWrapper}>{generateStars()}</div>;
};

// Définition des types de props
RatingStars.propTypes = {
    rating: PropTypes.number.isRequired, // Note à afficher
};

export default RatingStars;