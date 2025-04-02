import React, {useState} from 'react';
import styles from './image.module.css';

const Image = ({ src, alt, selectFile }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.imageContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={src} alt={alt} className={[styles.image, isHovered ? styles.dimmed : ''].join(" ")}/>
            {/*<div type='file' className={[styles.overlay, isHovered ? styles.visible : ''].join(" ")}>Выбрать</div>*/}
            <input
                onChange={(e) => selectFile(e)}
                className={[styles.overlay, isHovered ? styles.visible : ''].join(" ")}
                type="file"/>
        </div>
    );
};


export default Image;