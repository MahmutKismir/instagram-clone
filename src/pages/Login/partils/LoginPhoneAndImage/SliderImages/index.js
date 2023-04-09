import React from "react";
import { imageData } from "../imagesData";
import { useState, useEffect } from "react";

const SliderImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = imageData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      {imageData.map((item, index) => {
        return (
          <div
            className={
              index === currentSlide ? "absolute top-[124px] mr-35 slide-effect" : ''
            }
            key={index}
          >
            {index === currentSlide && (
              <img className="" src={item.image} alt="" name="" />
            )}
          </div>
        );
      })}
    </>
  );
};

export default SliderImages;
