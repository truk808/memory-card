import React from 'react';
import {observer} from "mobx-react-lite";
import Container from "../UI/container/Container";
import Input from "../UI/input/Input";
import icon from "../../img/icon/icon-question.svg";
import deleteIcon from "../../img/icon/icon-cross.svg"
import styles from "./moduleCardItem.module.css";

const ModuleCardItem = observer(({card, module}) => {
    const handleInputChange = (side) => (e) => {
        module.updateCard(card.id, side, e.target.value);
    }

    return (
        <div className={styles.moduleCardItem}>
            <Container style='card'>
                <div className={styles.delete}>
                    <img
                        onClick={() => module.deleteCard(card.id)}
                        src={deleteIcon}
                        alt="" className={[styles.icon, styles.delete].join(' ')}/>
                </div>
                <div className={styles.cardWrapper}>
                    <img src={icon} alt="" className={styles.icon}/>
                    <div className={styles.inputWrapper}>
                        <div className={styles.inputContainer}>
                            <Input
                                value={card.sideOne}
                                onChange={handleInputChange("sideOne")}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <Input
                                value={card.sideTwo}
                                onChange={handleInputChange("sideTwo")}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
});

export default ModuleCardItem;
