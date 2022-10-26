import React from "react";
import Image from "next/image";

const PartnerList = ({list}) => {
  return (
    <div className="PartnerList" role="list">
      {list.map((item, index) => (
        <Image src={item.image.src} width={item.image.width} height={item.image.height} alt={item.alt} key={index}/>
      ))}
    </div>
  );
};

export default PartnerList;
