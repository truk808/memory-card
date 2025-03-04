import React from 'react';
import styles from "./checkModule.module.css"

const CheckModule = ({module}) => {
    return (
        <div className={styles.checkModule}>
            <input type="checkbox" id="scales" name="scales" className={styles.checkbox}/>
            <p className={styles.text}>{module.name}</p>
        </div>
    );
};

export default CheckModule;