// components/UI/Toast/Toast.js
import React, { useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, onClose, duration = 2000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={styles.toast}>
            {message}
        </div>
    );
};

export default Toast;
