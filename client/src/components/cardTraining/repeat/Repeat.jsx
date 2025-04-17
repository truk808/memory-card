import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import styles from './repeat.module.css';
import arrowLeft from '../../../img/icon/icon-long-arrow.svg'
import curvedArrowLeft from '../../../img/icon/icon-curved-arrow-left.svg'
import curvedArrowRight from '../../../img/icon/icon-curved-arrow-right.svg'

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
                        {/*<div className={styles.arrLeft}>*/}
                        {/*    <img className={styles.icon} src={arrowLeft} onClick={() => handleClick(false)}/>*/}
                        {/*</div>*/}
                        <div className={styles.crnter}>
                            {
                                cards.activeCard.img === 'defult' ?
                                    <div className={styles.img}></div>
                                    :
                                    <img className={styles.img}
                                         src={[process.env.REACT_APP_API_URL, cards.activeCard.img].join("")}/>
                            }
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
