import React from "react";
import styles from "./Header.module.css";
// import clsx from "clsx";
function Header() {
  return (
    <div className={styles.container}>
      <ul className={styles.left_header}>
        <li className={styles.left_header_movies}>Movie</li>
        <li className={styles.left_header_nav}>
          <nav>
            <a hreft="#">Home</a>
          </nav>
          <nav>
            <a hreft="#">About</a>
          </nav>
          <nav>
            <a hreft="#">Contact</a>
          </nav>
        </li>
      </ul>
      <ul className={styles.right_header}>
        <li><input type="text" placeholder="Search..." className={styles.search_header}/></li>
        <li className={styles.button_search}>Search</li>
      </ul>
    </div>
  );
}

export default Header;
