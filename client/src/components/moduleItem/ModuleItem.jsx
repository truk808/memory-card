import React from 'react';
import Container from "../UI/container/Container";
import styles from './moduleItem.module.css'
import icon from "../../img/icon/icon-graduation.svg";
import {NavLink} from "react-router-dom";
import {MODULE_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";


const ModuleItem = observer(({module, onClick}) => {
    return (
        <NavLink className={styles.moduleItem} to={`${MODULE_ROUTE}/${module.id}`}>
            <img src={[process.env.REACT_APP_API_URL, 'icon/', module.icon == null ? 1 : module.icon].join('')} alt="" className={styles.icon}/>
            <h3 className={styles.text}>{module.name}</h3>
        </NavLink>
    );
});

export default ModuleItem;