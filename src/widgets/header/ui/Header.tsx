import React from "react";
import styles from "./Header.module.scss";
import { config } from "shared/config";

export const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{config.appName}</span>
    </div>
  );
};
