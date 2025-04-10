import React, {useEffect, useMemo} from 'react';
import {observer} from "mobx-react-lite";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import styles from "./Memoraization.module.css";

const Memorization = observer(({cards}) => {

    const answers = useMemo(() => {
        const answerCorrect = cards.activeCard;
        const answerWrong = cards.cards.filter(card => card.id !== answerCorrect.id).sort(() => Math.random() - 0.5).splice(0, 3);
        const answers = [...answerWrong, answerCorrect];
        return answers.sort(() => Math.random() - 0.5);
    }, [cards.activeCard]);

    const handleAnswer = (sideOne) => {
        if (sideOne === cards.activeCard.side_one) {
            cards.nextCard();
            cards.addTrueAnswers(cards.activeCard);
        } else {
            console.log("Ответ немправильный ")
        }
    };

    useEffect(() => {
        cards.setDate(Date.now());
    }, [])

    return (
        <div className={styles.page}>
            <div className={styles.pageWrapper}>
                <div className={styles.title}>
                    <p>{cards.activeCard.side_one}</p>
                </div>
                <div className={styles.buttonWrapper}>
                    {answers.map((answer) => (
                        <div className={styles.buttonContainer} key={answer.id}>
                            <Container>
                                <Button onClick={() => handleAnswer(answer.side_one)}>{answer.side_two}</Button>
                            </Container>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
});

export default Memorization;