import React from "react";
import styles from "./index.module.scss";
import { Header } from "widgets/header";
import { MainPage } from "pages/mainPage";

export const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <MainPage />
    </div>
  );
};
