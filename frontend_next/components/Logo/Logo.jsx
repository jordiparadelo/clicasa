import React from "react";
import Link from "next/link";
// Assets
import { images } from "assets";

const Logo = () => {
  return (
    <Link href="/" >
      <a className="Logo">
        <img {...images.Logo} />
      </a>
    </Link>
  );
};

export default Logo;
