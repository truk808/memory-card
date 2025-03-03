import React from 'react';
import {observer} from "mobx-react-lite";
import Button from "../../UI/button/Button";
import Container from "../../UI/container/Container";
import styles from "./Memoraization.module.css";

const Memorization = observer(({module}) => {
    

    return (
        <div className={styles.page}>
            <div className={styles.pageWrapper}>
                <div className={styles.title}>
                    <p>{module.activeCard.sideOne}</p>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.buttonContainer}>
                        <Container><Button onClick={() => module.nextCard()}>Вариант 1</Button></Container>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Container><Button>Вариант 2</Button></Container>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Container><Button>Вариант 3</Button></Container>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Container><Button>Вариант 4</Button></Container>
                    </div>
                </div>

            </div>
        </div>
    );
});

export default Memorization;