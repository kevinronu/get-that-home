import { useState } from "react";
import PropTypes from "prop-types";

import {
  DotContainer,
  DotsContainer,
  LeftArrowContainer,
  RightArrowContainer,
  StyledDiv,
  StyledImg,
} from "./styles";

export function Slideshow({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <StyledDiv>
        <LeftArrowContainer onClick={goToPrevious}>❰</LeftArrowContainer>
        <StyledImg src={images[currentIndex]} alt={`photo-${currentIndex}`} />
        <RightArrowContainer onClick={goToNext}>❱</RightArrowContainer>
      </StyledDiv>
      <DotsContainer>
        {images.map((slide, slideIndex) => (
          <DotContainer
            className={slideIndex === currentIndex ? "active" : ""}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </DotContainer>
        ))}
      </DotsContainer>
    </>
  );
}

Slideshow.propTypes = {
  images: PropTypes.array,
};
