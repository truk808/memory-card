import React, {useContext, useState} from 'react';
import '../style/auth.css'
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import logo from "../img/icon/logo.svg"
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleClick() {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(email, password);
            console.log(response)
        }
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
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={'login'}
                            placeholder={'Введите логин'}/>
                    </div>
                    <div className="auth-input-container">
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className={'login'}
                            placeholder={'Введите пароль'}/>
                    </div>
                </div>
                <hr className={'auth-separator'}/>
                <div className="auth-button-wrapper">
                    <div className="auth-button-container">
                        {isLogin ?
                            <a href={REGISTRATION_ROUTE}>Зарегистрироваться</a>
                            :
                            <a href={LOGIN_ROUTE}>Войти</a>
                        }
                    </div>
                    <div className="auth-button-container">
                        <Button
                            className={'blue'}
                            onClick={handleClick}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth