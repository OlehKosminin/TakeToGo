import React, { FunctionComponent, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import Header from "./modules/Header/Header";

export interface IRouterProps {
  theme: any;
}

const Router: FunctionComponent<IRouterProps> = ({ theme }) => {
  const headerType = theme.baseSettings.type.headerType;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header type={headerType} />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
