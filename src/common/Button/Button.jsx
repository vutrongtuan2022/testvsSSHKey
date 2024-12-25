import React from "react";
import styles from "./Button.module.css";
function Button({ placeholder, size, textButton, icon }) {
  return (
    <div>
      <input size={size} placeholder={placeholder} />
      <button size={size} className={styles.button}>
        {icon} {textButton}
      </button>
    </div>
  );
}

export default Button;
