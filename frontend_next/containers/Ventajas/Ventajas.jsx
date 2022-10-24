import React from "react";
// styles
import styles from "styles/Ventajas.module.scss";
// Components
import { VentajasList } from "components";

const Ventajas = ({ventajas}) => {
    console.log(ventajas)
  return (
    <section id="Ventajas" className={`${styles.Ventajas}`}>
      <div className="wrapper">
        <header className="section-header">
          <h2>En Clicaca sólo hay ventajas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <VentajasList ventajas={ventajas}/>
      </div>
    </section>
  );
};


export default Ventajas;
