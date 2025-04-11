import React from 'react';
import styles from './icon.module.css';

const Icon = ({icon, onClick}) => {
    // console.log(icon);
    return (
        <>
            <img
                onClick={() => onClick(icon)}
                className={styles.icon}
                src={[process.env.REACT_APP_API_URL, 'icon/', icon.icon].join('')} alt={'d'}>
            < /img>
        </>
    );
};

export default Icon;