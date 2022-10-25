import React from "react";

const VentajasList = ({ ventajas }) => {
  return (
    <div className="VentajasList" role="listbox">
      {ventajas?.map((ventaja, index) => (
        <figure key={index} className="Card">
          <img {...ventaja.icon} alt={ventaja.title} className="Card__icon" />
          <div className="Card__description">
            <h3 className="Card__title">{ventaja.title}</h3>
            <p> {ventaja.description}</p>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default VentajasList;
