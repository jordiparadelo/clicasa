import React from "react";
// styles
import styles from "styles/Testimonios.module.scss";
// Components
import { TestimonialSlider } from "components";

const Testimonios = ({testimonios}) => {
  return (
    <section id="Testimonios" className={`${styles.Testimonios}`}>
      <div className="wrapper">
        <header className="section-header">
          <h2>Nuestra mejor referencia, nuestros clientes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <TestimonialSlider testimonials={testimonios} itemPerView="1"/>
      </div>
    </section>
  );
};

export default Testimonios;
