import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Input from "../UI/input/Input";
import deleteIcon from "../../img/icon/icon-cross.svg"
import styles from "./moduleCardItem.module.css";
import {deleteCard, deleteImg, updateCard} from "../../http/cardAPI";
import Image from "../UI/image/Image";

const ModuleCardItem = observer(({card, module}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [sideOne, setSideOne] = useState(card.side_one);
    const [sideTwo, setSideTwo] = useState(card.side_two);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleInputChange = async (e, side) => {
        if (side === 'sideOne') {
            module.updateSideOne(card.id, e.target.value) // card.update
        } else {
            module.updateSideTwo(card.id, e.target.value) // card.update
        }
        await handleUpdate();
    }

    const removeImg = () => {
        deleteImg(card.id).then((data) => {
        })
    }

    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append('side_one', card.side_one);
        formData.append('side_two', card.side_two);
        if (selectedFile) {
            formData.append('img', selectedFile);
        }

        updateCard(formData, card.id).then(data => {
            // console.log('data', data)
            module.setCard(card.id, data)
        });
    };

    const handleDelete = () => {
        deleteCard(card.id).then(() => {
            module.deleteCard(card.id);
        });
    };

    useEffect(() => {
        if (selectedFile) {
            handleUpdate();
        }
    }, [selectedFile]);

    return (
        <div className={styles.moduleCardItem}>
            <div className={styles.container}>
                <Image
                    removeImg={removeImg}
                    selectFile={handleFileChange}
                    src={[process.env.REACT_APP_API_URL, card.img].join("")}
                    alt=""
                />
                <div className={styles.containerDelIn}>
                    <div className={styles.delete}>
                        <img
                            onClick={handleDelete}
                            src={deleteIcon}
                            alt=""
                            className={[styles.icon, styles.delete].join(' ')}
                        />
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputContainer}>
                                <Input
                                    className={'change'}
                                    value={card.side_one}
                                    onChange={(e) => handleInputChange(e, "sideOne")}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <Input
                                    className={'change'}
                                    value={card.side_two}
                                    onChange={(e) => handleInputChange(e, "sideTwo")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModuleCardItem;
