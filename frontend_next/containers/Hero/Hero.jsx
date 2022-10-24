import React from "react";
// styles
import styles from "styles/Hero.module.scss";
// Assets
import {images} from "assets";
// Components
import { Buscador } from "components";

const Hero = () => {
  return (
    <header id="Hero" className={`${styles.Hero}`}>
      <div className="wrapper">
        <h1>
          Vende tu casa <br/> en un <strong>clic</strong>
        </h1>
        <Buscador />
        <p>Compramos tu casa directamente sin complicaciones ni preocupaciones.</p>
        <button className={`${styles.PlayButton}`}>  Ver video <img {...images.PlayButton} alt="Reproducir video" /></button>
      </div>
    </header>
  );
};

export default Hero;
