import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  size?: "medium" | "small";
  type?: "button" | "submit" | "reset";
  outlined?: boolean;
  disabled?: boolean;
  onClick?: Function;
  className?: string;
}

/** Кнопка */
export const Button: React.FC<IProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
}) => {
  return (
    <button
      onClick={() => {
        if (onClick && !disabled) onClick();
      }}
      className={classNames(
        styles.root,
        disabled && styles.disabled,
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
};
