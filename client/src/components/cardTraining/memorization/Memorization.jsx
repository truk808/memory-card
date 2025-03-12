import React, {useMemo} from 'react';
import {observer} from "mobx-react-lite";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import styles from "./Memoraization.module.css";

const Memorization = observer(({module}) => {
    const answers = useMemo(() => {
        const learningCards = [...module.learningCards];
        const answerCorrect = learningCards.shift();
        const answerWrong = module.cards.filter(card => card.id !== answerCorrect.id).sort(() => Math.random() - 0.5).splice(0, 3);
        const answers = [...answerWrong, answerCorrect].sort(() => Math.random() - 0.5);
        module.setLearningCard(learningCards)
        return answers
    }, [module.activeCard]);

    const handleAnswer = (sideOne) => {
        if (sideOne === module.activeCard.sideOne) {
            module.nextCard();
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.pageWrapper}>
                <div className={styles.title}>
                    <p>{module.activeCard.sideOne}</p>
                </div>
                <div className={styles.buttonWrapper}>
                    {answers.map((answer) => (
                        <div className={styles.buttonContainer} key={answer.id}>
                            <Container>
                                <Button onClick={() => handleAnswer(answer.sideOne)}>{answer.sideTwo}</Button>
                            </Container>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
});

export default Memorization;