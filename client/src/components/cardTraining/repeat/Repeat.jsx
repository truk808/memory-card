import React, { useState, useRef, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import styles from './repeat.module.css';
import Container from "../../UI/container/Container";
import Button from "../../UI/button/Button";

const Repeat = observer(() => {
    const { module } = useContext(Context);
    const [flipped, setFlipped] = useState(false);
    const startX = useRef(null);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const moveCardToNotLearned = () => {
        if (module.activeCard) {
            // this._learnedCard.push(this._activeCard);
            nextCard();
            // console.log("выученные", this._learnedCard);
        }
    }

    const moveCardToLearned = () => {
        if (module.activeCard) {
            // this._notLearnedCard.push(this._activeCard);
            nextCard();
            // console.log("yt выученные", this._notLearnedCard);
        }
    }

    const nextCard = () => {
        const index = module.cards.indexOf(module.activeCard);
        if (index + 1 < module.cards.length) {
            module.setActiveCard(module.cards[index + 1]);
        } else {
            module.setActiveCard(null);
        }
    }

    return (
        <div className={styles.repeat}>
            <Container>
                <div
                    className={`${styles.card} ${flipped ? styles.flipped : ''}`}
                    onClick={handleFlip}
                >
                    {flipped ? module.activeCard.sideTwo : module.activeCard.sideOne}
                </div>
                <Button onClick={moveCardToNotLearned}> \--- </Button>
                <Button onClick={moveCardToLearned}> ---/ </Button>
            </Container>
        </div>
    );
});

export default Repeat;
