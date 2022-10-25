import React from "react";
import Image from "next/image";

const PartnerList = ({list}) => {
  return (
    <div className="PartnerList" role="list">
      {list.map((item, index) => (
        <Image {...item.image} alt={item.alt}/>
      ))}
    </div>
  );
};

export default PartnerList;
