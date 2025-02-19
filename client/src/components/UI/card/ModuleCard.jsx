import React from 'react';
import Container from "../container/Container";
import Input from "../input/Input";
import styles from './ModuleCard.module.css'

const ModuleCard = () => {
    return (
        <Container style='card'>
            <div className={styles.moduleContainer}>
                <img className={styles.icon} src="" alt=""/>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputContainer}>
                        <Input></Input>
                    </div>
                    <div className={styles.inputContainer}>
                        <Input></Input>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ModuleCard;