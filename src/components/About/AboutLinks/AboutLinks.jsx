import React from "react";
import styles from "./AboutLinks.module.scss";
import { GithubLogo, LinkedinLogo, Article, Faders } from "phosphor-react";
const AboutLinks = () => {
  const iconSize = 32;
  return (
    <div className={styles.aboutLinks}>
      <div className={styles.linkAndTag}>
        <GithubLogo size={iconSize} />
        <p>github</p>
      </div>
      <div className={styles.linkAndTag}>
        <LinkedinLogo size={iconSize} />
        <p>linkedin</p>
      </div>
      <div className={styles.linkAndTag}>
      <Article size={iconSize} />
      <p>resume</p>
      </div>
      <div className={styles.linkAndTag}><Faders size={iconSize} /><p>music</p></div>
      
      
    </div>
  );
};

export default AboutLinks;
