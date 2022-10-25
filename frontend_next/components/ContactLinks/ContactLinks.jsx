import React from 'react';
// Styles
import styles from 'styles/ContactLinks.module.scss';

const ContactLinks = ({children, className}) => {
    return (
        <div className={`${styles.ContactLinks} ${className}`} role="listbox">
            {children}
        </div>
    );
};

export default ContactLinks;