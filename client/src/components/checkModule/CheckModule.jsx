import React from 'react';
import styles from "./checkModule.module.css"
import {observer} from "mobx-react-lite";

const CheckModule = observer (({module, onChange}) => {
    return (
        <div className={styles.checkModule}>
            <input
                onChange={() => {onChange(module.id)}}
                type="checkbox"
                id="scales"
                name="scales"
                className={styles.checkbox}/>
            <p className={styles.text}>{module.name}</p>
        </div>
    );
});

export default CheckModule;