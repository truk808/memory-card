import React from 'react';
import styles from './button.module.css'

const Button = ({icon, children, className, onClick}) => {
    return (
        <button onClick={onClick} className={[styles.button, styles[className]].join(' ')}>
            {
                icon ?
                    <img className={styles.img} src={icon} alt=""/>
                    :
                    null
            }
            {
                children ?
                    <p className={styles.text}>
                        {children}
                    </p>
                    :
                    null
            }

        </button>
    );
};

export default Button;