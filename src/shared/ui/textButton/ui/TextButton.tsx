import React from "react";
import styles from "./TextButton.module.scss";
import classNames from "classnames";

interface IProps {
  onClick?: (event: React.MouseEvent) => void;
  children: React.ReactNode;
  errorStyle?: boolean;
}

export const TextButton: React.FC<IProps> = ({
  onClick,
  children,
  errorStyle,
}) => {
  return (
    <button
      onClick={(event) => onClick && onClick(event)}
      className={classNames(styles.root, errorStyle && styles.root_error)}
    >
      {children}
    </button>
  );
};
