import React, { Dispatch, SetStateAction } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface IProps {
  value: string;
  label?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  onClick?: Function;
  className?: string;
}

export const Input = ({
  value,
  label,
  onChange,
  onClick,
  className,
}: IProps) => {
  const input = React.useRef<HTMLInputElement>(null);
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className={classNames(styles.root, className)}>
      {label && (
        <div className={styles.labelWrapper}>
          <span className={styles.label}>{label}</span>
        </div>
      )}
      <div
        onClick={() => onClick && onClick()}
        className={classNames(
          styles.inputWrapper,
          active && styles.inputWrapper_active
        )}
      >
        <input
          ref={input}
          type="text"
          value={value || ""}
          onChange={() => onChange && onChange(input.current!.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          className={styles.inputHTML}
        ></input>
      </div>
    </div>
  );
};
