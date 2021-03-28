import React from "react";
import Navigation from "./Navigation";
import Ticker from "./Ticker";

import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.ticker}>
        <Ticker />
      </div>

      <div className={styles.bottomBorder} />
    </div>
  );
};

export default TopBar;
