import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {ABOUT_ROUTES} from "../utils/consts";
import About from "../page/About";
import {logDOM} from "@testing-library/dom";

const AppRouter = () => {
    const isAuth = true;
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, component }) =>
                <Route key={path} path={path} element={component} />
            )}
            {publicRoutes.map(({ path, component }) =>
                <Route key={path} path={path} element={component} />
            )}
            <Route path="*" element={<Navigate to={ABOUT_ROUTES} />}/>
        </Routes>
    );
};

export default AppRouter;