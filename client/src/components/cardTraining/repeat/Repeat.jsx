import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import styles from './repeat.module.css';
import Container from "../../UI/container/Container";
import Button from "../../UI/button/Button";
import DraggableContainer from "../../UI/draggableContainer/DraggableContainer";

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
                <Container>
                    <div
                        className={`${styles.card} ${flipped ? styles.flipped : ''}`}
                        onClick={handleFlip}
                    >
                        {flipped ? module.activeCard.side_two : module.activeCard.side_one}
                    </div>
                    <Button onClick={() => handleClick(false)}> \--- </Button>
                    <Button onClick={() => handleClick(true)}> ---/ </Button>
                </Container>
            {/*</DraggableContainer>*/}
        </div>
    );
});

export default Repeat;
