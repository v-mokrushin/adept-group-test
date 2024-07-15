import React from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";
import { routes } from "shared/route";
import { Container, PageTitle } from "shared/ui";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageTitle>{routes.main.name}</PageTitle>
      </Container>
    </div>
  );
};
