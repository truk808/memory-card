import React, {useContext} from 'react';
import './header.css'
import question from '../../img/icon/icon-question.svg'
import gamepad from '../../img/icon/icon-gamepad.svg'
import modules from '../../img/icon/icon-modules.svg'
import {ABOUT_ROUTE, GROUP_ROUTE, WORKOUT_ROUTE} from "../../utils/consts";
import {NavLink} from "react-router-dom";
import {Context} from "../../index";

const Header = () => {
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')

    }

    return (
        <div className='header'>
            <div className="nav">
                <ul className="nav-list">
                    <li className='nav-item'>
                        <img src={question} alt="" className="nav-item-img"/>
                        <NavLink to={ABOUT_ROUTE} className="nav-item-link">О нас</NavLink>
                    </li>
                    <li className='nav-item'>
                        <img src={gamepad} alt="" className="nav-item-img"/>
                        <NavLink to={WORKOUT_ROUTE} className="nav-item-link">Тренировка</NavLink>
                    </li>
                    <li className='nav-item'>
                        <img src={modules} alt="" className="nav-item-img"/>
                        <NavLink to={GROUP_ROUTE} className="nav-item-link">Модули</NavLink>
                    </li>
                </ul>
                <button onClick={() => logOut()} className='exit'>Выйти</button>
            </div>
        </div>
    );
};

export default Header;