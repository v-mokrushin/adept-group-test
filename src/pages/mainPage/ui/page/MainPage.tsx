import React, { useEffect } from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";
import { routes } from "shared/route";
import { Checkbox, Container, PageTitle } from "shared/ui";
import { companiesSlice, selectCompanies } from "entities/company";
import { useAppDispatch, useAppSelector } from "shared/hooks/store";

export const MainPage: React.FC = () => {
  const data = useAppSelector(selectCompanies);
  console.debug(data);

  return (
    <div className={styles.root}>
      <Container>
        <PageTitle>{routes.main.name}</PageTitle>
        <Checkbox />
      </Container>
    </div>
  );
};
