import React from "react";
// Styles
import styles from 'styles/Navbar.module.scss';
// Constants
import { links } from "./constants.js";
// Components
import { Logo, NavMenu, ContactLinks, ContactButton } from "components";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <NavMenu links={links} />
      <ContactLinks>
        <ContactButton contact="phone" label="910 123 456"/>
        <ContactButton contact="whatsapp"/>
        <ContactButton contact="email"/>
      </ContactLinks>
    </nav>
  );
};

export default Navbar;
