import React from 'react';
import styles from './input.module.css';

const Input = ({className, placeholder, value, onChange, onKeyPress}) => {
    return (
        <input
            onKeyPress={onKeyPress}
            onChange={onChange}
            value={value}
            className={[styles.input, className ? styles.login : styles.card].join(' ')}
            placeholder={placeholder}/>
    );
};

export default Input;