import React, { useState, useEffect } from "react";
import styles from "./SkillScroller.module.scss";

const SkillScroller = () => {
  const [roleCount, updateRoleCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rolesToDisplay = ["software", "JavaScript", "React", "frontend", "web"];

  const roleCountUpdater = () => {
    setIsAnimating(true);
    if (roleCount < rolesToDisplay.length - 1) {
      updateRoleCount(roleCount + 1);
    } else {
      updateRoleCount(0);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  useEffect(() => {
    const skillTicker = setInterval(roleCountUpdater, 2000);
    return () => clearInterval(skillTicker);
  }, [roleCount]);

  return (
    <div className={styles.skillScroller}>
      <div className={styles.slideIn}>
        <h1
          className={isAnimating ? styles.slideItem : styles.slideItemStopped}
        >
          {rolesToDisplay[roleCount]}
        </h1>

        <h1
          className={isAnimating ? styles.slideItem : styles.slideItemStopped}
        >
          {roleCount + 1 >= rolesToDisplay.length
            ? rolesToDisplay[0]
            : rolesToDisplay[roleCount + 1]}
        </h1>
        
      </div>
    </div>
  );
};

export default SkillScroller;
