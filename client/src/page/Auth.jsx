import React, {useContext} from 'react';
import Input from "../components/UI/input/Input";
import Container from "../components/UI/container/Container";
import '../style/auth.css'
import {useLocation} from "react-router-dom";
import {ABOUT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import UserStore from "../store/UserStore";
import {Context} from "../index";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const { user } = useContext(Context);

    function redirectToAbout() {
        window.location.assign(ABOUT_ROUTE)
        user.setIsAuth(true);
        console.log(user._isAuth);
    }

    return (
        <div className="auth">
            <Container style='login'>
                <h1 className='auth-title'>{isLogin ? "Авторизоваться" : "Заркгистрироваться"}</h1>
                <Input placeholder={'Введите email'}/>
                <Input placeholder={'Введите пароль'}/>
                {isLogin ?
                    <div className="auth-wrapper">
                        <a href={REGISTRATION_ROUTE} className='auth-link'>Зарегистрироваться</a>
                        <button onClick={redirectToAbout}>Войти</button>
                    </div>
                    :
                    <div className="auth-wrapper">
                        <a href={LOGIN_ROUTE} className='auth-link'>Войти</a>
                        <button>Зарегистрироваться</button>
                    </div>
                }
            </Container>
        </div>
    );
};

export default Auth