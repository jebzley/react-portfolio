import React from "react";
import styles from "./AboutLinks.module.scss";
import { GithubLogo, LinkedinLogo, Article, Faders } from "phosphor-react";
const AboutLinks = () => {
  const iconSize = 32;
  return (
    <div className={styles.aboutLinks}>
        <a href="https://github.com/jebzley" target="_blank" rel="noopener noreferrer" className={styles.linkAndTag}>
          <GithubLogo size={iconSize} />
          <p>github</p>
        </a>
        <a href="https://www.linkedin.com/in/sebleedev" target="_blank" rel="noopener noreferrer" className={styles.linkAndTag}>
        <LinkedinLogo size={iconSize} />
        <p>linkedin</p>
      </a>
      <a href="https://github.com/jebzley" target="_blank" rel="noopener noreferrer" className={styles.linkAndTag}>
        <Article size={iconSize} />
        <p>resume</p>
      </a>
      <a href="https://cuiet.bandcamp.com" target="_blank" rel="noopener noreferrer" className={styles.linkAndTag}>
        <Faders size={iconSize} />
        <p>music</p>
      </a>
    </div>
  );
};

export default AboutLinks;
