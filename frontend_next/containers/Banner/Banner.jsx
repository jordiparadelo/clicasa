import React from "react";
// styles
import styles from "styles/Banner.module.scss";

const Banner = ({ title, description, cta, background }) => {
  return (
    <section className={`${styles.Banner}`}>
      <div className="wrapper">
        <h2 className={`${styles.Banner__title}`}>
          Las mejores condiciones del mercado inmobiliario
        </h2>
        <p className={`${styles.Banner__description}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus non
          fuga atque animi magni commodi, omnis reprehenderit assumenda facere
          tempore architecto ea! Modi placeat aliquid assumenda nostrum! Nulla,
          quia earum.
        </p>
        <button className={`${styles.Banner__cta}`}>
          Descubre nuestas tarifas
        </button>
      </div>
      <div className={`${styles.Banner__background}`}></div>
    </section>
  );
};

export default Banner;
