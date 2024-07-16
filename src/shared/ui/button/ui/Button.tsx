import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  color?: "blue" | "red";
  size?: "medium" | "small";
  disabled?: boolean;
  onClick?: Function;
  className?: string;
}

/** Кнопка */
export const Button: React.FC<IProps> = ({
  children,
  onClick,
  disabled = false,
  color = "blue",
  size = "medium",
  className,
}) => {
  return (
    <button
      onClick={() => {
        if (onClick && !disabled) onClick();
      }}
      className={classNames(
        styles.root,
        styles[color],
        styles[size],
        disabled && styles.disabled,
        className
      )}
    >
      {children}
    </button>
  );
};
