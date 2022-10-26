import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Styles
import styles from "styles/TestimonialSlider.module.scss";
// Lib
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <>
      <Swiper
        className={`${styles.TestimonialSlider}`}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        speed={800}
        autoplay={{ delay: 4000 }}
        autoHeight={true}
        pagination={{ clickable: true }}
        breakpoints={
          // when window width is >= 600px
          {
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }
        }
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.TestimonialSlider__slide}`}
          >
            <Image
              src={testimonial.image.src}
              width={testimonial.image.width}
              height={testimonial.image.height}
              alt={testimonial.title}
            />
            <figcaption>
              <blockquote>{testimonial.title}</blockquote>
              <p>{testimonial.testimonial}</p>
            </figcaption>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
