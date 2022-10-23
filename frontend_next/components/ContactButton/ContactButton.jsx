import React, { useEffect, useState } from "react";
// Styles
import styles from 'styles/ContactButton.module.scss';
// Constants
import { conections } from "constants";

const ContactButton = ({ contact, label }) => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    setLinks(conections);
  }, []);

  return (
    links && (
      <a href={links[contact].link} className={`${styles.ContactButton}`}>
        <>
          <img {...links[contact].icon} alt={contact} />
          {label || null}
        </>
      </a>
    )
  );
};

export default ContactButton;
