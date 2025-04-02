import React from 'react';
import {observer} from "mobx-react-lite";
import Input from "../UI/input/Input";
import deleteIcon from "../../img/icon/icon-cross.svg"
import styles from "./moduleCardItem.module.css";
import {deleteCard, updateCard} from "../../http/cardAPI";
import Image from "../UI/image/Image";

const ModuleCardItem = observer(({card, module}) => {
const [sideOne, setSideOne] = React.useState('');
const [sideTwo, setSideTwo] = React.useState('');
const [file, setFile] = React.useState('default');


    const selectFile = (e) => {
        setFile(e.target.files[0])  ;
    }

    const handleInputChange = (side) => (e) => {
        const newCard = {
            ...card,
            [side]: e.target.value
        };

        updateCard(newCard, card.id).then(data => {
            module.setCard(card.id, data);
        });
    }

    const handleDelete = () => {
        deleteCard(card.id).then(data => {
            module.deleteCard(card.id)
        })
    }

    return (
        <div className={styles.moduleCardItem}>
            <div className={styles.container}>
                <Image
                    selectFile={selectFile}
                    src={[process.env.REACT_APP_API_URL, card.img].join("")}
                    alt=""/>
                <div className={styles.containerDelIn}>
                    <div className={styles.delete}>
                        <img
                            onClick={() => handleDelete()}
                            src={deleteIcon}
                            alt="" className={[styles.icon, styles.delete].join(' ')}/>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputContainer}>
                                <Input
                                    className={'change'}
                                    value={card.side_one}
                                    onChange={handleInputChange("side_one")}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <Input
                                    className={'change'}
                                    value={card.side_two}
                                    onChange={handleInputChange("side_two")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default ModuleCardItem;
