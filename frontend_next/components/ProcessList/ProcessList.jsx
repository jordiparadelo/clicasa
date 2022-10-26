import React from "react";
import Image from "next/image";

const ProcessList = ({ list }) => {
  return (
    list && (
      <div className="ProcessList" role="list">
        {list.map((item, index) => (
          <figure key={index} className="ProcessList__item">
            <header className="item-header">
              <span className="index">{index + 1}</span>
              <div className="content">
                <h3 className="ProcessList__item-title">{item.title}</h3>
                <p className="ProcessList__description">{item.description}</p>
              </div>
            </header>
            <Image src={item.image.src} width={item.image.width} height={item.image.height} alt={item.title} className="ProcessList__image" />
          </figure>
        ))}
      </div>
    )
  );
};

export default ProcessList;
