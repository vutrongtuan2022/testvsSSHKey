import React from "react";
import styles from "./MovieList.module.css";
import PropTypes from "prop-types";
function MovieList({ title, data }) {
  return (
    <div className={styles.container}>
      <div className={styles.movie_title}>
        <h2 className={styles.text_title}>{title}</h2>
        <div className={styles.movie_title_images}>
          {data.map((item, index) => (
            <div className={styles.movie_list_image}>
              <div className={styles.banner_background} key={index} />
              <img
                src="/logo192.png"
                alt="logo"
                className={styles.image_size}
              />
              <p className={styles.text_title_image}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
export default MovieList;
