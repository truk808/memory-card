import React from 'react';
import { observer } from "mobx-react-lite";
import Container from "../UI/container/Container";
import Input from "../UI/input/Input";
import icon from "../../img/icon/icon-question.svg";
import styles from "./moduleCardItem.module.css";

const ModuleCardItem = observer(({ card, module }) => {
    const handleInputChange = (side) => (e) => {
        module.updateCard(card.id, side, e.target.value);
    };

    return (
        <Container style='card'>
            <div className={styles.cardWrapper}>
                <img src={icon} alt="" className={styles.icon} />
                <div className={styles.inputWrapper}>
                    <Input value={card.sideOne} onChange={handleInputChange("sideOne")} />
                    <Input value={card.sideTwo} onChange={handleInputChange("sideTwo")} />
                </div>
            </div>
        </Container>
    );
});

export default ModuleCardItem;
