import React, {useContext, useEffect} from 'react';
import './header.css'
import question from '../../img/icon/icon-question.svg'
import gamepad from '../../img/icon/icon-gamepad.svg'
import modules from '../../img/icon/icon-module.png'
import {ABOUT_ROUTE, GROUP_ROUTE, LOGIN_ROUTE, WORKOUT_ROUTE} from "../../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {Context} from "../../index";
import {eventWrapper} from "@testing-library/user-event/dist/utils";



const Header = () => {
    const [navItemActive, setNavItemActive] = React.useState(null);
    const {user} = useContext(Context);

    const location = useLocation()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        console.log(location.pathname)
        setNavItemActive(location.pathname)
    }, [location])

    return (
        <div className="header-wrapper">
            <div className='header'>
                <div className="nav">
                    <ul className="nav-list">
                        <li className={`nav-item ${navItemActive === ABOUT_ROUTE ? 'active' : ''}`}>
                            <img src={question} alt="" className="nav-item-img"/>
                            <NavLink to={ABOUT_ROUTE} className="nav-item-link">О нас</NavLink>
                        </li>
                        <li className={`nav-item ${navItemActive === WORKOUT_ROUTE ? 'active' : ''}`}>
                            <img src={gamepad} alt="" className="nav-item-img"/>
                            <NavLink to={WORKOUT_ROUTE} className="nav-item-link">Тренировка</NavLink>
                        </li>
                        <li className={`nav-item ${navItemActive === GROUP_ROUTE ? 'active' : ''}`}>
                            <img src={modules} alt="" className="nav-item-img"/>
                            <NavLink to={GROUP_ROUTE} className="nav-item-link">Модули</NavLink>
                        </li>
                    </ul>
                    <button onClick={() => logOut()} className='exit'>Выйти</button>
                </div>
            </div>
        </div>

    );
};

export default Header;