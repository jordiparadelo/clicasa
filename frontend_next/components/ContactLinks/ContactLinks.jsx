import React from 'react';
// Styles
import styles from 'styles/ContactLinks.module.scss';

const ContactLinks = ({children}) => {
    return (
        <div className={`${styles.ContactLinks}`} role="listbox">
            {children}
        </div>
    );
};

export default ContactLinks;