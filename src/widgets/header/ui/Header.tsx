import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Обзор компаний</span>
    </div>
  );
};
