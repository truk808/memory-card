import React from 'react';
import styles from './input.module.css';

const Input = ({className, placeholder, value, onChange}) => {
    return (
        <input
            onChange={onChange}
            value={value}
            className={[styles.input, className ? styles.login : ''].join(' ')}
            placeholder={placeholder}/>
    );
};

export default Input;