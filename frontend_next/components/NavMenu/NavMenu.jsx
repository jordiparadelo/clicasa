import React, { useState } from "react";
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
  const [state, setState] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function toggle() {
    setState((state) => !state);
    state
      ? document.body.style.removeProperty("overflow-y")
      : (document.body.style.overflowY = "hidden");
  }

  return (
    <>
      <menu className={`${styles.NavMenu}`} aria-hidden={!state}>
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
        onClick={toggle}
        alt="Toggle navbar menu"
      >
        {state ? (
          <img {...images.MenuClose} alt="Cerrar Menu" />
        ) : (
          <img {...images.MenuOpen} alt="Abrir Menu" />
        )}
      </button>
    </>
  );
};

export default NavMenu;
