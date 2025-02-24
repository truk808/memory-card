import React from 'react';
import styles from './input.module.css';

const Input = ({className, placeholder}) => {
    return (
       <input className={[styles.input, className ? styles.login : ''].join(' ')}
       placeholder={placeholder}/>
    );
};

export default Input;