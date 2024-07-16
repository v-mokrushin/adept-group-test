import React from "react";
import styles from "./MainPage.module.scss";
import { routes } from "shared/route";
import { Container, PageTitle } from "shared/ui";
import { CompaniesWorks } from "widgets/companiesWorks";
import { CompanyCreation } from "widgets/companyCreation";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <PageTitle>{routes.main.name}</PageTitle>
        <div className={styles.contentBox}>
          <CompanyCreation />
          <CompaniesWorks />
        </div>
      </Container>
    </div>
  );
};
