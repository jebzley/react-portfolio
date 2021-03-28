import React from "react";
import styles from "./ContactLink.module.scss";

const ContactLink = (props) => {
  return (
    <div className={styles.contactLink}>
      <div className={styles.contactIcon}>{props.icon}</div>
      <div className={styles.prefixWrapper}>
        <p className={styles.prefix}>{props.prefix}</p>
      </div>
      <p className={styles.linkName}>{props.name}</p>
      <p className={styles.suffix}>{props.suffix}</p>
    </div>
  );
};

export default ContactLink;
