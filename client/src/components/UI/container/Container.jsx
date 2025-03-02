import React from 'react';
import styles from './container.module.css'

const  Container = ({className, children, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={[styles.container, className].join(' ')}>
            {children}
        </div>
    );
};

export default Container;