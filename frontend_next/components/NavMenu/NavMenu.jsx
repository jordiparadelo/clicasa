import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
// Styles
import styles from 'styles/NavMenu.module.scss'

const NavMenu = ({ links }) => {
  const {asPath} = useRouter()

  return (
    <menu className={`${styles.NavMenu}`}>
      {links.map((link, index) => (
        <Link href={link.href || "#"} key={index}>
          <a aria-selected={asPath === link.href} className={`${styles.NavMenu__Link}`}>{link.slug}</a>
        </Link>
      ))}
    </menu>
  );
};

export default NavMenu;
