import React from "react";
import styles from "./ContactLink.module.scss";

const ContactLink = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
      <div className={styles.contactIcon}>{props.icon}</div>
      <div className={styles.prefixWrapper}>
        <p className={styles.prefix}>{props.prefix}</p>
      </div>
      <p className={styles.linkName}>{props.name}</p>
      <p className={styles.suffix}>{props.suffix}</p>
    </a>
  );
};

export default ContactLink;
