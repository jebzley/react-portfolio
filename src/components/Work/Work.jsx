import React from "react";
import styles from "./Work.module.scss";
const Work = () => {
  return (
    <section className={styles.work}>
      <div className={styles.jobColumn1}>
        <div className={styles.job}>
          <h3>knoWaste</h3>
        </div>
        <div className={styles.job}>
          <h3>PunkAPI</h3>
        </div>
        <div className={styles.job}>
          <h3>Minesweeper</h3>
        </div>
      </div>

      <div className={styles.jobColumn2}>
        <div className={styles.job}>
          <h3>Firebase Login System</h3>
        </div>
        <div className={styles.job}>
          <h3>Calculator</h3>
        </div>
        <div className={styles.job}>
          <h3>Morse Translator</h3>
        </div>
      </div>
    </section>
  );
};

export default Work;
