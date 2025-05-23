import React, {useState} from 'react';
import styles from './image.module.css';

const Image = ({ src, alt, selectFile, removeImg}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.imageContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={src} alt={alt} className={[styles.image, isHovered ? styles.dimmed : ''].join(" ")}/>
            {/*<div type='file' className={[styles.overlay, isHovered ? styles.visible : ''].join(" ")}>Выбрать</div>*/}
            <div className={[styles.overlay, isHovered ? styles.visible : ''].join(" ")}>
                <input
                    onChange={(e) => selectFile(e)}
                    type="file"/>
                <button
                onClick={() => removeImg()}
                >
                    удалить
                </button>
            </div>

        </div>
    );
};


export default Image;