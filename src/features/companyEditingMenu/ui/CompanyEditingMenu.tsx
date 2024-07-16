import React, { useLayoutEffect, useMemo, useState } from "react";
import styles from "./CompanyEditingMenu.module.scss";
import classNames from "classnames";
import { Button, Input } from "shared/ui";
import { useOutsideClick } from "shared/hooks";
import { IUseEditCompany } from "../hook";

interface IProps {
  state: IUseEditCompany;
}

export const CompanyEditingMenu: React.FC<IProps> = ({ state }) => {
  const ref = React.useRef(null);
  const event = state.event;
  const [newValue, setNewValue] = useState("");
  const isValid = useMemo(
    () => !!newValue && newValue !== state.initialValue,
    [newValue, state.initialValue]
  );
  useOutsideClick(ref, state.close);

  const onSave = () => {
    state.onSave(newValue);
    state.close();
  };

  useLayoutEffect(() => {
    if (state.isMenuVisible) setNewValue(state.initialValue);
  }, [state.isMenuVisible]);

  if (!state.isMenuVisible || !event) return <></>;

  return (
    <div
      ref={ref}
      style={{ top: event.clientY, left: event.clientX }}
      className={classNames(styles.root)}
    >
      <Input label="Новое значение" value={newValue} onChange={setNewValue} />
      <div className={styles.actionsBox}>
        <Button size="small" onClick={onSave} disabled={!isValid}>
          Сохранить
        </Button>
        <Button size="small" color="red" onClick={state.close}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
