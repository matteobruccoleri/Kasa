import React, { useState } from 'react';
import './Carrousel.scss';
import ArrowBack from "../../../assets/images/arrow_back.png";
import ArrowForward from "../../../assets/images/arrow_forward.png";


const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={"carrousel"}>
      <img className={"previous"} src={ArrowBack} alt="Arrow Back" onClick={goToPrevious}/>
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <img className={"next"} src={ArrowForward} alt="Arrow Forward" onClick={goToNext} />
    </div>
  );
};

export default Carrousel;