import React from "react";
// Styles
import styles from "styles/Buscador.module.scss";
// Asssets
import { images } from "assets";

const Buscador = () => {
  return (
    <form className={`${styles.Buscador}`}>
      <label className={styles.Buscador__container}>
        <img src={images.Home.src} />
        <input type="text" placeholder="Introduce la dirección de tu casa o piso"/>
      </label>
        <button type="submit" className={`${styles['Buscador__submit-button']}`}>vender mi inmueble</button>
    </form>
  );
};

export default Buscador;
