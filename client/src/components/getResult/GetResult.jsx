import React from 'react';
import styles from './getResult.module.css';
import Modal from "../UI/modal/Modal";
import {NavLink} from "react-router-dom";
import {GROUP_ROUTE, MODULE_ROUTE} from "../../utils/consts";

const GetResult = ({active, setActive, cards, type}) => {
    const trueAnswers = cards.trueAnswers.length
    const falseAnswers = cards.falseAnswers.length
    const date = new Date(cards.date)
    const time = new Date(Date.now() - cards.date)

    setActive(true);

    const closeHandle = () => {
        setActive(false);
        cards.reset();
    }

    return (
        <Modal active={active} setActive={setActive}>
            <div className={styles.resultModal}>
                <p>📅 Дата: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
                <p>⏱ Время: {time.getSeconds()} сек</p>
                <p>✅ Правильных ответов: {trueAnswers} ({Math.round((trueAnswers * 100) / (trueAnswers + falseAnswers) * 100) / 100}%)</p>
                <p>❌ Неправильных ответов: {falseAnswers}</p>
                <NavLink to={MODULE_ROUTE} onClick={() => closeHandle()}>Далее</NavLink>
            </div>
        </Modal>

    );
};

export default GetResult;