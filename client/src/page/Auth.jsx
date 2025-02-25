import React, {useContext} from 'react';
import '../style/auth.css'
import {useLocation} from "react-router-dom";
import {ABOUT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import logo from "../img/icon/logo.svg"
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";

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
                    <div className="auth-input-container">
                        <Input className={'login'} placeholder={'Введите логин'}/>
                    </div>
                    <div className="auth-input-container">
                        <Input className={'login'} placeholder={'Введите пароль'}/>
                    </div>
                </div>
                <hr className={'auth-separator'} />
                <div className="auth-button-wrapper">
                    <div className="auth-button-container">
                        {isLogin ?
                            <a href={REGISTRATION_ROUTE}>Зарегистрироваться</a>
                            :
                            <a href={LOGIN_ROUTE}>Войти</a>
                        }
                    </div>
                    <div className="auth-button-container">
                        {isLogin ?
                            <Button className={'blue'} onClick={() => redirectToAbout()}>Войти</Button>
                            :
                            <Button className={'blue'} onClick={() => {}}>Зарегистрироваться</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth