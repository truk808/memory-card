import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Context} from '../index'
import {ABOUT_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const { user } = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, component }) =>
                <Route key={path} path={path} element={component} />
            )}
            {publicRoutes.map(({ path, component }) =>
                <Route key={path} path={path} element={component} />
            )}
            <Route path="*" element={<Navigate to={ABOUT_ROUTE} />}/>
        </Routes>
    );
};

export default AppRouter;