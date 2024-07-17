import React from "react";
import styles from "./PageTitle.module.scss";
import classNames from "classnames";

interface IProps {
  children: string;
  resetMarginBottom?: boolean;
}

export const PageTitle: React.FC<IProps> = ({
  children,
  resetMarginBottom,
}) => {
  return (
    <span
      className={classNames(
        styles.root,
        resetMarginBottom && styles.root_noMargin
      )}
    >
      {children}
    </span>
  );
};
