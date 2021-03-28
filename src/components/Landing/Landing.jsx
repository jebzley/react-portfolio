import React, { useState, useEffect } from "react";
import styles from "./Landing.module.scss";
import Greeting from "./Greeting";

const Landing = ({history}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() =>{
  }, [isActive])
  
  return (
    <section className={styles.landing}>
      <Greeting />
          <button className={`${styles.enterButton} ${isActive ? styles.fadeOut : ""}`} onClick={() => history.push('/work')}>Show me!</button>
    </section>
  );
};

export default Landing;
