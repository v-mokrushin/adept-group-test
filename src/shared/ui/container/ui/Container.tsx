import React from "react";
import styles from "./Container.module.scss";

interface IProps {
  children: React.ReactNode;
  newOrderType?: boolean;
  massType?: boolean;
  fullWidth?: boolean;
}

export const Container: React.FC<IProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
