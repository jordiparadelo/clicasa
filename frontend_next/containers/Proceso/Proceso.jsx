import React from "react";
// styles
import styles from "styles/Proceso.module.scss";
// Components
import { ProcessList, ProcessTab } from "components";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";

const Proceso = ({ proceso }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <section id="Proceso" className={`${styles.Proceso}`}>
      <div className="wrapper">
        <header className="section-header">
          <h2>Vender tu piso nunca fue tan fácil</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={`${styles.Proceso__background}`}></div>
        </header>
        {isMobile ? (
          <ProcessList list={proceso} />
        ) : (
          <ProcessTab tabs={proceso} />
        )}
      </div>
    </section>
  );
};

export default Proceso;
