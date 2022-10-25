import React from "react";
// Styles
import styles from "styles/Footer.module.scss";
// Hooks
import useMediaQuery from "hooks/useMediaQuery.js";
// Viewports
import { DesktopVersion, MobileVersion } from "./viewportVersions.js";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer className={`${styles.Footer}`}>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </footer>
  );
};

export default Footer;
