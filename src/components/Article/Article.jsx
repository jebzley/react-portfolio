import React, { useEffect } from "react";
import styles from "./Article.module.scss";
import MinesweeperText from "./ArticleText/MinesweeperText"
const Article = (props) => {
    useEffect(() => {
      props.setTitle();
    }, [])
  return (
    <section className={styles.article}>
      <div className={styles.articleInfo}>
        <h2>{props.tagline}</h2>
        <img src={props.imgSrc} />
        <div className={styles.articleLinks}></div>
      </div>
      <div className={styles.articleText}>
        {props.text}
      </div>
    </section>
  );
};

export default Article;
