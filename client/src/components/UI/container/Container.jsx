import React from 'react';
import styles from './container.module.css'

const  Container = ({style, children}) => {
    console.log(style);
    return (
        <div className={[styles.container, (style === 'card' ? styles.card : styles.login )].join(' ')}>
            {children}
        </div>
    );
};

export default Container;