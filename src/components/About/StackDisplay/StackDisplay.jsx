import React from "react";
import StackIcon from "./StackIcon";
import styles from "./StackDisplay.module.scss";

import { Icon, InlineIcon } from "@iconify/react";
import githubactionsIcon from "@iconify/icons-simple-icons/githubactions";
import html5Icon from "@iconify/icons-simple-icons/html5";
import css3Icon from "@iconify/icons-simple-icons/css3";
import sassIcon from "@iconify/icons-simple-icons/sass";
import javascriptIcon from "@iconify/icons-simple-icons/javascript";
import reactIcon from "@iconify/icons-simple-icons/react";
import bootstrapIcon from "@iconify/icons-simple-icons/bootstrap";
import nodeDotJs from "@iconify/icons-simple-icons/node-dot-js";
import jestIcon from "@iconify/icons-simple-icons/jest";
import cypressIcon from "@iconify/icons-simple-icons/cypress";
import firebaseIcon from "@iconify/icons-simple-icons/firebase";
import mongodbIcon from "@iconify/icons-simple-icons/mongodb";

const StackDisplay = () => {
  return (
    <div className={styles.stackDisplay}>
      <StackIcon name={"HTML5"} icon={html5Icon} color="#f74e0c" />
      <StackIcon name={"CSS3"} icon={css3Icon} color="#148ee5" />
      <StackIcon name={"Sass"} icon={sassIcon} color="#d361c8" />
      <StackIcon name={"JavaScript"} icon={javascriptIcon} color="#eadc19" />
      <StackIcon name={"React"} icon={reactIcon} color="#07dbfc" />
      <StackIcon name={"Bootstrap"} icon={bootstrapIcon} color="#54337c" />
      <StackIcon name={"nodeJS"} icon={nodeDotJs} color="#1b7c2e" />
      <StackIcon name={"Jest"} icon={jestIcon} color="#d33d1b" />
      <StackIcon name={"Cypress"} icon={cypressIcon} color="#3d3d3d" />
      <StackIcon name={"Actions"} icon={githubactionsIcon} color="#1754d8" />
      <StackIcon name={"Firebase"} icon={firebaseIcon} color="#f9c004" />
      <StackIcon name={"mongoDB"} icon={mongodbIcon} color="#1e8906" />
    </div>
  );
};

export default StackDisplay;
