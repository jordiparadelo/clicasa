// Components
import { ContactButton, ContactLinks, Logo } from "components";
// Constants
import { footerMenu } from "./constants.js";
// Styles
import styles from "styles/Footer.module.scss";

export const MobileVersion = () => (
  <div className="wrapper">
    <div className={`${styles.Footer__top}`}>
      <Logo />
      <menu className="footer-menu">
        {footerMenu.map((item, index) => (
          <a href={item.link} key={index}>{item.slug}</a>
        ))}
      </menu>
    </div>
    <div className={`${styles.Footer__bottom}`}>
      <ContactLinks>
        <ContactButton contact="phone" label="910 123 456" />
        <ContactButton contact="email" label="info@clicasa.com" />
      </ContactLinks>
      <div className="legals">
        <p>© 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS</p>
      </div>
      <ContactLinks>
        <ContactButton contact="facebook" />
        <ContactButton contact="twitter" />
        <ContactButton contact="linkedin" />
        <ContactButton contact="youtube" />
      </ContactLinks>
    </div>
  </div>
);

export const DesktopVersion = () => (
  <div className="wrapper">
    <div className={`${styles.Footer__top}`}>
      <Logo />
      <ContactLinks>
        <ContactButton contact="phone" label="910 123 456" />
        <ContactButton contact="email" label="info@clicasa.com" />
      </ContactLinks>
    </div>
    <div className={`${styles.Footer__bottom}`}>
      <div className="legals">
        <p>© 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS</p>
      </div>
      <menu className="footer-menu">
        {footerMenu.map((item, index) => (
          <a href={item.link} key={index}>{item.slug}</a>
        ))}
      </menu>
      <ContactLinks>
        <ContactButton contact="facebook" />
        <ContactButton contact="twitter" />
        <ContactButton contact="linkedin" />
        <ContactButton contact="youtube" />
      </ContactLinks>
    </div>
  </div>
);
