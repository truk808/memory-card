import React from 'react';
import styles from './icon.module.css';

const Icon = ({icon, onClick, active}) => {
    // console.log(icon);
    return (
        <>
            <img
                onClick={() => onClick(icon)}
                className={[styles.icon, active ? styles.active : ''].join(' ')}
                src={[process.env.REACT_APP_API_URL, 'icon/', icon.icon].join('')} alt={''}>
            < /img>
        </>
    );
};

export default Icon;