import React from "react";
import styles from "./index.module.scss";
import { Header } from "widgets/header";
import { MainPage } from "pages/mainPage";
import { Provider } from "react-redux";
import { store } from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.root}>
        <Header />
        <MainPage />
      </div>
    </Provider>
  );
};
