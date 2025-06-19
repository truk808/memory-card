import React, {useContext, useState} from 'react';
import '../style/auth.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {ABOUT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import logo from "../img/icon/logo.svg"
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Auth = observer( () => {
    const navigate = useNavigate();
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleClick() {
        // console.log(user)
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true)
            navigate(ABOUT_ROUTE);
        } catch (e) {
            // alert(e.response.data.message)
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
                           <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
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
});

export default Auth