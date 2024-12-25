import React from "react";
import styles from "./HeaderComponent.module.css";
import { SecurityUser, ShoppingCart, SearchNormal1 } from "iconsax-react";
import { Button } from "../../common/Button";
function HeaderComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.left_header}>
        <div className={styles.content_text}>Thietkegiaodien</div>
      </div>
      <div className={styles.center_header}>
        <Button
          size={40}
          textButton={"Tìm kiếm"}
          placeholder="Input search text"
          icon={<SearchNormal1 size="20" color="#d9e3f0" />}
        />
        {/* <div className={styles.search_bar}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Gì cũng có..."
          />
          <button className={styles.search_button}>
            <SearchNormal1 size="20" color="#d9e3f0" />
            <span>Tìm là thấy</span>
          </button>
        </div> */}
      </div>
      <div className={styles.right_header}>
        <div className={styles.right_header_user}>
          <SecurityUser size="30" color="#D9E3F0" />
          <div className={styles.right_header_text}>
            <span>Đăng nhập/Đăng ký</span>
            <span>Tài khoản ▼</span>
          </div>
        </div>
        <div>
          <ShoppingCart size="30" color="#d9e3f0" />
          <span>Giỏ hàng</span>
        </div>
      </div>
      {/* HeaderComponent */}
    </div>
  );
}

export default HeaderComponent;
