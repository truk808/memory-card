import React from 'react';
import Container from "../UI/container/Container";
import styles from './moduleItem.module.css'
import icon from "../../img/icon/icon-gamepad.svg";

const ModuleItem = ({module, onClick}) => {
    console.log(onClick)
    return (
        <Container
            onClick={onClick}
            className={styles.moduleItem} style={'card'}>
            <img src={icon} alt="" className={styles.icon}/>
            <h3 className={styles.text}>{module.name}</h3>
        </Container>
    );
};

export default ModuleItem;