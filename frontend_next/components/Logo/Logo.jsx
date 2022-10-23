import React from "react";
import Link from "next/link";
// Styles
import styles from "styles/Logo.module.scss";
// Assets
import { images } from "assets";

const Logo = () => {
  return (
    <Link href="/" >
      <a className={`${styles.Logo}`}>
        <img {...images.Logo} />
        <strong className={`${styles.Logo__texto}`}>
          <span className={`${styles.cli}`}>Cli</span>
          <span className={`${styles.casa}`}>Casa</span>
        </strong>
      </a>
    </Link>
  );
};

export default Logo;
