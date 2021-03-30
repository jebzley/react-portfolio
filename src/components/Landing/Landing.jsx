import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.scss";
import Greeting from "./Greeting";

const Landing = (props) => {
  const setTitle = props.setTitle;

  const updateTitle = () => {
    setTitle("");
  };
  useEffect(() => {
    updateTitle();
  }, []);
  return (
    <section className={styles.landing}>
      <Greeting />
      <Link to="/work">
        <button
          className={`${styles.enterButton}`}
        >
          Show me!
        </button>
      </Link>
    </section>
  );
};

export default Landing;
