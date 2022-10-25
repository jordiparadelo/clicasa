import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Styles
import styles from "styles/TestimonialSlider.module.scss";
// Services
import { mouseDownHandler, mouseMoveHandler, mouseUpHandler } from "./services";

const TestimonialSlider = ({ testimonials, itemPerView }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const paginationLength = testimonials.length / Number(itemPerView)
  let paginationButtons = []

  for(let i = 0; i < paginationLength; i++) {
    paginationButtons.push(i)
  }

  let sliderWrapperRef = useRef(null);

  useEffect(() => {
    sliderWrapperRef.addEventListener("mousemove", mouseMoveHandler);
    sliderWrapperRef.addEventListener("mousedown", mouseDownHandler);
    sliderWrapperRef.addEventListener("mouseup", mouseUpHandler);
    sliderWrapperRef.addEventListener("mouseleave", mouseUpHandler);
  }, []);

    useEffect(() => {
      const left = (sliderWrapperRef.scrollWidth / (activeSlide + 1)) + 'px'
      sliderWrapperRef.scrollTo = {left: left, behavior: 'smooth'}
    }, [activeSlide])

  return (
    <div className={`${styles.TestimonialSlider}`}>
      <div
        className={`${styles.TestimonialSlider__wrapper}`}
        ref={(current) => (sliderWrapperRef = current)}
      >
        {testimonials.map((testimonial, index) => (
          <figure
            aria-selected={index === activeSlide}
            key={index}
            className={`${styles.TestimonialSlider__slide}`}
          >
            <Image {...testimonial.image} alt={testimonial.title} />
            <figcaption>
              <blockquote>{testimonial.title}</blockquote>
              <p>{testimonial.testimonial}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={`${styles.TestimonialSlider__pagination}`}>
        {paginationButtons.map(( index) => (
          <button
            aria-selected={index === activeSlide}
            key={index}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
