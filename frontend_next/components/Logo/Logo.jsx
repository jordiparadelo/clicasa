import React from "react";
import Link from "next/link";
// Assets
import { images } from "assets";

const Logo = () => {
  return (
    <Link href="/" >
      <a className="Logo">
        <img src={images.Logo.src} />
      </a>
    </Link>
  );
};

export default Logo;
