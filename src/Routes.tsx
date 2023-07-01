import React, { FunctionComponent, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Header from './modules/Header/Header';

export interface IRouterProps {}

const Router: FunctionComponent<IRouterProps> = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
