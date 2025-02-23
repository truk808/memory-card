import React, {useContext} from 'react';
import '../style/auth.css'
import {useLocation} from "react-router-dom";
import {ABOUT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import logo from "../img/icon/logo.svg"
import Input from "../components/UI/input/Input";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const {user} = useContext(Context);

    function redirectToAbout() {
        window.location.assign(ABOUT_ROUTE)
        user.setIsAuth(true);
    }

    return (
        <div className="auth">
            <div className="login-card">
                <div className="auth-title">
                    <img src={logo} alt=""/>
                    <h1 className="auth-title-text">
                        Memory card
                    </h1>
                </div>
                <div className="auth-inputs-wrapper">
                    <div className="auth-input-wrapper">
                        <Input/>
                    </div>
                    <div className="auth-input-wrapper">
                        <Input/>
                    </div>
                </div>
                <hr className={'auth-separator'} />
            </div>
        </div>
    );
};

export default Auth