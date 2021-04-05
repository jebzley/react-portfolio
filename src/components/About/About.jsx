import React, { useEffect } from "react";
import styles from "./About.module.scss";
import StackDisplay from "./StackDisplay";
import AboutLinks from "./AboutLinks";

const About = (props) => {
  const setTitle = props.setTitle;

  const updateTitle = () => {
    setTitle("About Me");
  };
  useEffect(() => {
    updateTitle();
  }, []);

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
            I'm a software developer from Bristol and I'm currently looking for
            exciting projects to be a part of.
          </p>
          <p>
            I'm a lover of music, animals, fitness and food. I've been playing
            the same three videogames for the past 15 years.
          </p>
          <p>
            On a technical level my skills lie in frontend, JavaScript and React
            development. On a creative level I want to to bring out the fun,
            personal touches and sense of community I remember in the old web
            using modern web development philosophy.
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
