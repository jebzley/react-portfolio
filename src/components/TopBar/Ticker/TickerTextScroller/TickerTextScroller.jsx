import React from "react";
import styles from "./TickerTextScroller.module.scss";

const TickerTextScroller = (props) => {
  return <div className={styles.textScrollArea}>
      <p className={styles.textScroller}>{props.text}</p>
  </div>;
};

export default TickerTextScroller;