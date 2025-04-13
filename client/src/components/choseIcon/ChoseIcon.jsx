import React, {useEffect, useState} from 'react';
import Modal from "../UI/modal/Modal";
import styles from "./choseIcon.module.css"
import {getIcon} from "../../http/iconAPI";
import Image from "../UI/image/Image";
import Icon from "../UI/icon/Icon";
import {login} from "../../http/userAPI";

const ChoseIcon = ({modalActive, setModalActive, group, handleClickIcon, activeIcon}) => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        getIcon().then(data => {
            setIcons(data);
        })
    }, []);

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.content}>
                <div className={styles.text}>
                    Выбрать иконку
                </div>
                <div className={styles.iconList}>
                    {
                        icons.map((icon) => (
                            <Icon
                                active={activeIcon === icon.icon}
                                onClick={handleClickIcon}
                                icon={icon}
                                key={icon.id} />
                        ))
                    }
                </div>
            </div>
        </Modal>
    );
};

export default ChoseIcon;