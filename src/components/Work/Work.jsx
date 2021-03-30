import React, { useEffect, useState } from "react";
import styles from "./Work.module.scss";
const Work = (props) => {
  const setTitle = props.setTitle;
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);
  const updateTitle = () => {
    setTitle("Work");
  };
  useEffect(() => {
    updateTitle();
  }, []);

  const applyHoverLeft = () => setHoveredLeft(true);
  const removeHoverLeft = () => setHoveredLeft(false);
  const applyHoverRight = () => setHoveredRight(true);
  const removeHoverRight = () => setHoveredRight(false);

  return (
    <section className={styles.work}>
      <div className={styles.jobColumn1}>
        <div
          onMouseEnter={applyHoverLeft}
          onMouseLeave={removeHoverLeft}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>knoWaste</h3>
        </div>
        <div
          onMouseEnter={applyHoverLeft}
          onMouseLeave={removeHoverLeft}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>PunkAPI</h3>
        </div>
        <div
          onMouseEnter={applyHoverLeft}
          onMouseLeave={removeHoverLeft}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Minesweeper</h3>
        </div>
      </div>

      <div className={styles.jobColumn2}>
        <div
          onMouseEnter={applyHoverRight}
          onMouseLeave={removeHoverRight}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Firebase Login System</h3>
        </div>
        <div
          onMouseEnter={applyHoverRight}
          onMouseLeave={removeHoverRight}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Calculator</h3>
        </div>
        <div
          onMouseEnter={applyHoverRight}
          onMouseLeave={removeHoverRight}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Morse Translator</h3>
        </div>
      </div>
    </section>
  );
};

export default Work;
