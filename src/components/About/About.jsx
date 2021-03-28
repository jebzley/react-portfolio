import React from "react";
import styles from "./About.module.scss";
import StackDisplay from "./StackDisplay";
import AboutLinks from "./AboutLinks";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.imageAndLinks}>
          <div className={styles.imageOfMe}></div>
          <AboutLinks />
        </div>
        <div className={styles.descriptionOfMe}>
          <h3>A nice chap.</h3>
          <p>
            I got this girl and she wants me to duke her. I told her I'd come
            scoop her around eight, she said (super). That sounds great, shorty
            girl's a trooper. No matter what I need her to do, she be like
            (Super). Own his own throne, the boss like King Koopa On the
            microphone he flossed the ring (super). Average emcees is like a TV
            blooper MF DOOM, he's like D.B. Cooper.
          </p>
        </div>
      </div>
      <div className={styles.stack}>
      <h3>My toolset</h3>
      <StackDisplay />
      </div>
    </section>
  );
};

export default About;
