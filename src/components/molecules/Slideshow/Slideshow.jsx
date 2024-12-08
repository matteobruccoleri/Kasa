import React, { useState } from 'react';
import './Slideshow.scss';
import ArrowBack from "../../../assets/images/arrow_back.png";
import ArrowForward from "../../../assets/images/arrow_forward.png";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  // Vérifier si le tableau de photos contient plus d'un élément
  const hasMultipleSlides = pictures.length > 1;

  return (
    <div className="slideshow">
      {/* Affichage des flèches seulement si il y a plus d'un slide */}
      {hasMultipleSlides && (
        <>
          <img
            className="previous"
            src={ArrowBack}
            alt="Arrow Back"
            onClick={goToPrevious}
          />
          <img
            className="next"
            src={ArrowForward}
            alt="Arrow Forward"
            onClick={goToNext}
          />
        </>
      )}

      {/* Affichage de l'image du slide courant */}
      <img src={pictures[currentIndex]} alt="Kasa - logement" />

      {/* Affichage de la numérotation si plus d'un slide */}
      {hasMultipleSlides && (
        <div className="slide-number">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
