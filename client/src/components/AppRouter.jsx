import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {ABOUT_ROUTES} from "../utils/consts";
import {Context} from '../index'

const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user);

    const isAuth = true;
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, component }) =>
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