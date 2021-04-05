import React, { useEffect } from "react";
import styles from "./Article.module.scss";
import { Link, GitBranch } from "phosphor-react";

const Article = (props) => {
  useEffect(() => {
    props.setTitle();
  }, []);
  return (
    <section className={styles.article}>
      <div className={styles.articleInfo}>
        <h2>{props.tagline}</h2>
        <img src={props.imgSrc} />
        <div className={styles.articleLinks}>
          <a href={props.directLink}>
            <Link size={32} /> <p>Direct Link</p>
          </a>
          <a href={props.repoLink}>
            <GitBranch size={32} /> <p>Repo</p>
          </a>
        </div>
      </div>
      <div className={styles.articleText}>{props.text}</div>
    </section>
  );
};

export default Article;
