import React from "react";
import styles from "./Checkbox.module.scss";
import classNames from "classnames";

interface ICheckboxProps {
  label?: JSX.Element | string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}
export const Checkbox: React.FC<ICheckboxProps> = ({
  label,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={value}
          onChange={() => onChange && onChange(!value)}
          className={styles.htmlInput}
        />
        <div className={styles.controlBox}>
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128.411 128.411"
            className={styles.icon}
          >
            <g>
              <polygon points="127.526,15.294 45.665,78.216 0.863,42.861 0,59.255 44.479,113.117 128.411,31.666" />
            </g>
          </svg>
        </div>
      </label>
      {label && (
        <span
          onClick={() => onChange && onChange(!value)}
          className={styles.label}
        >
          {label}
        </span>
      )}
    </div>
  );
};
