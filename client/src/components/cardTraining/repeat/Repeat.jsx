import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import styles from './repeat.module.css';
import Container from "../../UI/container/Container";
import Button from "../../UI/button/Button";
import DraggableContainer from "../../UI/draggableContainer/DraggableContainer";
import arrowLeft from '../../../img/icon/icon-long-arrow.svg'
import curvedArrowLeft from '../../../img/icon/icon-curved-arrow-left.svg'
import curvedArrowRight from '../../../img/icon/icon-curved-arrow-right.svg'

const Repeat = observer(({module}) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleClick = (bool) => {
        if(bool) {

        } else {

        }
        module.nextCard();
        setFlipped(false)
    }

    return (
        <div className={styles.repeat}>
            {/*<DraggableContainer>*/}
                    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={handleFlip}>
                        <div className={[styles.iconContainer, styles.arrLeft].join(' ')}>
                            <img className={styles.icon} src={arrowLeft} onClick={() => handleClick(false)}/>
                        </div>
                        <p className={styles.text}>
                            {flipped ? module.activeCard.side_two : module.activeCard.side_one}
                        </p>
                        <div className={styles.curvedArrow}>
                            <div className={styles.iconContainer}>
                                <img className={styles.icon} src={curvedArrowLeft} onClick={() => handleClick(true)}/>
                            </div>
                            <div className={styles.iconContainer}>
                                <img className={styles.icon} src={curvedArrowRight} onClick={() => handleClick(true)}/>
                            </div>
                        </div>





                    </div>

            {/*</DraggableContainer>*/}
        </div>
    );
});

export default Repeat;
