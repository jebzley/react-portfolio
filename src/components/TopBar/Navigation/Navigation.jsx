import React from "react";
import styles from "./Navigation.module.scss";
import { House, Briefcase, SmileyMeh, Book } from "phosphor-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const iconSize = 35;
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <House size={iconSize} />
      </Link>
      <Link to="/work">
        <Briefcase size={iconSize} />
      </Link>
      <Link to="/about">
        <SmileyMeh size={iconSize} />
      </Link>
      <Link to="/contact">
        <Book size={iconSize} />
      </Link>
    </nav>
  );
};

export default Navigation;
