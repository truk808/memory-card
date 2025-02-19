import React from 'react';
import styles from './container.module.css'

const  Container = ({props, children}) => {
    return (
        <div {...props} className={[styles.container, styles.login].join(' ')}>
            {children}
        </div>
    );
};

export default Container;