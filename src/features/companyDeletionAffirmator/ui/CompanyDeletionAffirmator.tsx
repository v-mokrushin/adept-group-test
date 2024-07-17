import React from "react";
import styles from "./CompanyDeletionAffirmator.module.scss";
import classNames from "classnames";
import { Button } from "shared/ui";

interface IProps {
  selectedCompaniesCount: number;
  onAffirm: Function;
  onReset: Function;
  defaultPosition?: boolean;
}

export const CompanyDeletionAffirmator: React.FC<IProps> = ({
  selectedCompaniesCount,
  onAffirm,
  onReset,
  defaultPosition,
}) => {
  return (
    <div
      className={classNames(
        styles.root,
        defaultPosition && styles.root_defaultPosition
      )}
    >
      <span>{`Выделенных компаний: ${selectedCompaniesCount}`}</span>
      <div className={styles.actionsBox}>
        <Button size="small" onClick={onAffirm}>
          Удалить выделенные компании
        </Button>
        <Button color="red" size="small" onClick={onReset}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
