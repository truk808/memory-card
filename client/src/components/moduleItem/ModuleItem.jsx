import React from 'react';
import Container from "../UI/container/Container";
import styles from './moduleItem.module.css'
import icon from "../../img/icon/icon-graduation.svg";

const ModuleItem = ({module, onClick}) => {
    // console.log(module.name)
    return (
        <div className={styles.moduleItem} onClick={onClick}>
            <img src={icon} alt="" className={styles.icon}/>
            <h3 className={styles.text}>{module.name}</h3>
        </div>
    );
};

export default ModuleItem;