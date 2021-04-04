import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Work.module.scss";

const Work = (props) => {
  const setTitle = props.setTitle;
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  useEffect(() => {
    setTitle("Work");
  }, []);

  return (
    <section className={styles.work}>
      <div className={styles.jobColumn1}>
        <Link to="/article">
          <div
            onMouseEnter={() => setHoveredLeft(true)}
            onMouseLeave={() => setHoveredLeft(false)}
            className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
          >
            <h3>knoWaste</h3>
          </div>
        </Link>
        <div
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>PunkAPI Frontend</h3>
        </div>
        <div
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Online Notes</h3>
        </div>
      </div>

      <div className={styles.jobColumn2}>
        <div
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Minesweeper</h3>
        </div>
        <div
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Calculator</h3>
        </div>
        <div
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Morse Translator</h3>
        </div>
      </div>
    </section>
  );
};

export default Work;
