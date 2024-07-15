import React, { ReactNode } from "react";
import styles from "./TableTemplate.module.scss";
import classNames from "classnames";

interface IProps {
  children: ReactNode;

  className?: string;
}

export const TableTemplate: React.FC<IProps> = ({ children, className }) => {
  return (
    <table className={classNames(styles.root, className)}>{children}</table>
  );
};
