import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import styles from './repeat.module.css';
import Container from "../../UI/container/Container";
import Button from "../../UI/button/Button";
import DraggableContainer from "../../UI/draggableContainer/DraggableContainer";
import arrowLeft from '../../../img/icon/icon-long-arrow.svg'
import curvedArrowLeft from '../../../img/icon/icon-curved-arrow-left.svg'
import curvedArrowRight from '../../../img/icon/icon-curved-arrow-right.svg'
import {login} from "../../../http/userAPI";

const Repeat = observer(({cards}) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleClick = (bool) => {
        if(bool) {
            cards.addTrueAnswers(cards.activeCard);
        } else {
            cards.addFalseAnswers(cards.activeCard);
        }

        cards.trueAnswers.forEach((answer) => {
            console.log(answer.side_one, answer.side_two);
        })
        console.log('-----------------------------------');
        cards.falseAnswers.forEach((answer) => {
            console.log(answer.side_one, answer.side_two);
        })

        cards.nextCard();
        setFlipped(false)
    }

    useEffect(() => {
        cards.setDate(Date.now());
    }, [])

    return (
        <div className={styles.repeat}>
            {/*<DraggableContainer>*/}
                    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
                        <div className={styles.arrLeft}>
                            <img className={styles.icon} src={arrowLeft} onClick={() => handleClick(false)}/>
                        </div>
                        <p className={styles.text} onClick={handleFlip}>
                            {flipped ? cards.activeCard.side_two : cards.activeCard.side_one}
                        </p>
                        <div className={styles.curvedArrows}>
                            <div className={styles.iconContainer}>
                                <img className={[styles.icon, styles.red].join(" ")} src={curvedArrowLeft} onClick={() => handleClick(false)}/>
                            </div>
                            <div className={styles.iconContainer}>
                                <img className={[styles.icon, styles.green].join(" ")} src={curvedArrowRight} onClick={() => handleClick(true)}/>
                            </div>
                        </div>
                    </div>
            {/*</DraggableContainer>*/}
        </div>
    );
});

export default Repeat;
