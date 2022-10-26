import React from "react";
// styles
import styles from "styles/Hero.module.scss";
// Assets
import { images } from "assets";
// Components
import { Buscador } from "components";

const Hero = () => {
  return (
    <header id="Hero" className={`${styles.Hero}`}>
      <div className="wrapper">
        <h1 className={`${styles.Hero__title}`}>
          Vende tu casa <br /> en un{" "}
          <strong>
            clic{" "}
            <img
              src={images.CTArrow.src}
              className="cta-arrow"
              alt="Haz click en el buscador"
            />
          </strong>
        </h1>
        <Buscador />
        <p className={`${styles.Hero__subtitle}`}>
          Compramos tu casa directamente sin complicaciones ni preocupaciones.
        </p>
        <button className={`${styles.PlayButton}`}>
          {" "}
          Ver video{" "}
          <span className="icon">
            <img src={images.PlayButton.src} alt="Reproducir video" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
