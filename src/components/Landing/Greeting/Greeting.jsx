import React from "react";
import styles from "./Greeting.module.scss";
import SkillScroller from "./SkillScroller";

const Greeting = () => {
  return (
    <div className={styles.greeting}>
      <h1>Hi!</h1>
      <h1>My name is</h1>
      <h1 className={styles.boldTitle}>Seb Lee</h1>
      <h1>and I'm a</h1>
      <SkillScroller />
      <h1>developer.</h1>
    </div>
  );
};

export default Greeting;
