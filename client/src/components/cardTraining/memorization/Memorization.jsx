import React, {useMemo} from 'react';
import {observer} from "mobx-react-lite";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import styles from "./Memoraization.module.css";

const Memorization = observer(({module}) => {
    console.log('sdwsd');
    const answers = useMemo(() => {
        const answerCorrect = module.activeCard;
        const answerWrong = module.cards.filter(card => card.id !== answerCorrect.id).sort(() => Math.random() - 0.5).splice(0, 3);
        const answers = [...answerWrong, answerCorrect];
        return answers.sort(() => Math.random() - 0.5);
    }, [module.activeCard]);

    const handleAnswer = (sideOne) => {
        if (sideOne === module.activeCard.side_one) {
            module.nextCard();
        } else {
            console.log("Ответ немправильный ")
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.pageWrapper}>
                <div className={styles.title}>
                    <p>{module.activeCard.side_one}</p>
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