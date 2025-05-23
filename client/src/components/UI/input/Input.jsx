import React from 'react';
import styles from './input.module.css';

const Input = ({className, placeholder, value, onChange, onKeyPress, img}) => {
    return (
        <div className={[styles.inputContainer, styles[className]].join(' ')}>
            {img && <img src={img} className={value ? `${styles.icon} ${styles.active}` : styles.icon} alt="icon"/>}
            <input
                onKeyPress={onKeyPress}
                onChange={onChange}
                value={value}
                className={styles.input}
                placeholder={placeholder}/>
        </div>

    );
};

export default Input;