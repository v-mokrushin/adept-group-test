import React from "react";
import styles from "./CompanyCreation.module.scss";
import { Button, Input } from "shared/ui";
import { useAppDispatch } from "shared/store";
import { companiesSliceActions, useCompanyCreation } from "entities/company";

export const CompanyCreation: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    name,
    setName,
    address,
    setAddress,
    isValid,
    treatedName,
    treatedAddress,
    reset,
  } = useCompanyCreation();

  const onCreate = () => {
    if (!isValid) return;
    dispatch(
      companiesSliceActions.create({
        name: treatedName,
        address: treatedAddress,
      })
    );
    reset();
  };

  return (
    <div className={styles.root}>
      <Input label="Название" value={name} onChange={setName} />
      <Input label="Адрес" value={address} onChange={setAddress} />
      <Button onClick={onCreate} disabled={!isValid}>
        Создать компанию
      </Button>
    </div>
  );
};
