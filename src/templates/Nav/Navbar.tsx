import React from "react";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>Navbar</div>
    </div>
  );
};
