import React from "react";
import Navigation from "./Navigation";
import Ticker from "./Ticker";

import styles from "./TopBar.module.scss";

const TopBar = (props) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.titleArea}>
      <h1>{props.title}</h1>
      </div>
      <div className={styles.ticker}>
        <Ticker />
      </div>

      <div className={styles.bottomBorder} />
    </div>
  );
};

export default TopBar;
