import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Work.module.scss";
import html5Icon from "@iconify/icons-simple-icons/html5";
import javascriptIcon from "@iconify/icons-simple-icons/javascript";
import sassIcon from "@iconify/icons-simple-icons/sass";
import jestIcon from "@iconify/icons-simple-icons/jest";

import { Icon } from "@iconify/react";
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
        <Link
          to="/article"
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>knoWaste</h3>
        </Link>
        <Link
          to="/article"
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>PunkAPI Frontend</h3>
        </Link>
        <div
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          className={hoveredLeft ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Online Notes</h3>
        </div>
      </div>

      <div className={styles.jobColumn2}>
        <Link
          to="/minesweeper"
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className={`${hoveredRight ? styles.jobHover : styles.job} ${
            styles.minesweeper
          }`}
        >
          <h3>Minesweeper</h3>
          <div className={styles.jobStack}>
            <Icon icon={javascriptIcon} />
            <Icon icon={html5Icon} />
            <Icon icon={sassIcon} />
            <Icon icon={jestIcon} />
          </div>
        </Link>
        <div
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className={hoveredRight ? `${styles.jobHover}` : `${styles.job}`}
        >
          <h3>Calculator</h3>
        </div>
        <Link
          to="/morsetranslator"
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className={`${hoveredRight ? styles.jobHover : styles.job} ${
            styles.morseTranslator
          }`}
        >
          <h3>Morse Translator</h3>
          <div className={styles.jobStack}>
            <Icon icon={jestIcon} />
            <Icon icon={javascriptIcon} />
            <Icon icon={html5Icon} />
            <Icon icon={sassIcon} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Work;
