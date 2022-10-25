import React from "react";
// Styles
import styles from "styles/Partners.module.scss";
// Components
import { PartnerList } from "components";

const Partners = ({ partners }) => {
  return (
    <section className={`${styles.Partners}`}>
      <div className="wrapper">
        <div className="section-header">
          <h2>Trabajamos con las mejores empresas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <PartnerList list={partners} />
      </div>
    </section>
  );
};

export default Partners;
