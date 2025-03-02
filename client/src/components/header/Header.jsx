import React from 'react';
import './header.css'
import question from '../../img/icon/icon-question.svg'
import gamepad from '../../img/icon/icon-gamepad.svg'
import modules from '../../img/icon/icon-modules.svg'
import {ABOUT_ROUTE, GROUP_ROUTE, WORKOUT_ROUTE} from "../../utils/consts";

const Header = () => {
    return (
        <div className='header'>
            <div className="nav">
                <ul className="nav-list">
                    <li className='nav-item'>
                        <img src={question} alt="" className="nav-item-img"/>
                        <a href={ABOUT_ROUTE} className="nav-item-link">О нас</a>
                    </li>
                    <li className='nav-item'>
                        <img src={gamepad} alt="" className="nav-item-img"/>
                        <a href={WORKOUT_ROUTE} className="nav-item-link">Тренировка</a>
                    </li>
                    <li className='nav-item'>
                        <img src={modules} alt="" className="nav-item-img"/>
                        <a href={GROUP_ROUTE} className="nav-item-link">Модули</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;