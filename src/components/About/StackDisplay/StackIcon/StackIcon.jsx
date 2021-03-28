import React, { useState } from "react";
import styles from "./StackIcon.module.scss";
import { Icon } from "@iconify/react";

const StackIcon = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={styles.stackIconWrapper}
      key={`icon${props.name}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        icon={props.icon}
        className={`${styles.stackIcon}`}
        style={isHovered ? { color: props.color } : { color: "#000000" }}
      />
      <p>{props.name}</p>
    </div>
  );
};

export default StackIcon;
