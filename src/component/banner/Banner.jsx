import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import images from "../../constants/images/banner";
import icon from "../../constants/images/icon";

function Banner() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === images.length ? 1 : prevIndex + 1
      );
    }, 3000); // Chuyển slide sau mỗi 3 giây

    return () => clearInterval(interval);
  }, []);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > images.length) newIndex = 1;
      if (newIndex < 1) newIndex = images.length;
      return newIndex;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.mySlides} ${styles.fade}`}
            style={{ display: slideIndex === index + 1 ? "block" : "none" }}
          >
            <img
              src={src}
              style={{ width: "100%" }}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        <div className={styles.banner_background} />
        <div className={styles.content_banner}>
          <div className={styles.left_text_content}>
            <p className={styles.my_content_text}>TV Show</p>
            <div className={styles.text_head}>
              <h2>Nghe nói em thích tôi</h2>
            </div>
            <div className={styles.rating_star}>
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={icon.rating}
                  alt="rating"
                  className={styles.images_star}
                />
              ))}
              <img
                src={icon.rating_half}
                alt="rating"
                className={styles.images_star}
              />
            </div>
            <p style={{ color: "white" }}>
              We have created a fictional "personal" website/blog, and our
              fictional character is a hobby photographer. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={styles.button_content}>
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "4px",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Chi tiết
              </button>
              <button
                style={{
                  color: "white",
                  backgroundColor: "red",
                  padding: "4px",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Xem phim
              </button>
            </div>
          </div>
          <div className={styles.right_text_content}>
            <p>video</p>{" "}
          </div>
        </div>
        <p className={styles.prev} onClick={() => plusSlides(-1)}>
          ❮
        </p>
        <p className={styles.next} onClick={() => plusSlides(1)}>
          ❯
        </p>
      </div>
    </div>
  );
}

export default Banner;
