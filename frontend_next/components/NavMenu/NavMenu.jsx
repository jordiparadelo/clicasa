import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Styles
import styles from "styles/NavMenu.module.scss";
// Hooks
import useMediaQuery from "hooks/useMediaQuery";
// Assets
import { images } from "assets";

const NavMenu = ({ links }) => {
  const { asPath } = useRouter();
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    isMobile ? setToggle(toggle) : setToggle(false)
  }, [isMobile])


  return (
    <>
      <menu
        className={`${styles.NavMenu}`}
        aria-hidden={!toggle}
      >
        {links.map((link, index) => (
          <Link href={link.href || "#"} key={index}>
            <a
              aria-selected={asPath === link.href}
              className={`${styles.NavMenu__Link}`}
            >
              {link.slug}
            </a>
          </Link>
        ))}
      </menu>
      <button
        className={`${styles.HamburgerButton}`}
        onClick={() => setToggle((prevState) => !prevState)}
        alt="Toggle navbar menu"
      >
        {toggle ? (
          <img {...images.MenuClose} alt="Cerrar Menu" />
        ) : (
          <img {...images.MenuOpen} alt="Abrir Menu" />
        )}
      </button>
    </>
  );
};

export default NavMenu;
