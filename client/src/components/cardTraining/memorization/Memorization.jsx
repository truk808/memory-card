import React, { useEffect, useMemo, useState } from 'react';
import { observer } from "mobx-react-lite";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import Toast from "../../Toast/Toast";
import styles from "./Memoraization.module.css";

const Memorization = observer(({ cards }) => {
    const [showToast, setShowToast] = useState(false);

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
            cards.addFalseAnswers(cards.activeCard);
            setShowToast(true);
        }
    };

    useEffect(() => {
        cards.setDate(Date.now());
    }, []);

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
                {showToast && (
                    <Toast message="Неправильный ответ!" onClose={() => setShowToast(false)} />
                )}
            </div>
        </div>
    );
});

export default Memorization;
