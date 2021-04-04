import React, {useEffect} from "react";
import styles from './Article.module.scss';

const Article = (props) => {

  useEffect(() => {
    props.setTitle("A Job")
  }, [])
  return (
    <section className ={styles.article}>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis illum blanditiis delectus? Modi obcaecati placeat quam sed sequi neque ipsa, adipisci ut accusantium. Saepe cupiditate illum animi ipsa itaque.</p>
      </div>
  </section>
  );
};

export default Article;
