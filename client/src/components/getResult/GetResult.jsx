import React from 'react';
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
            <p>Дата {date.getDate()}.{date.getMonth()}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
            <p>Время {time.getSeconds()} секунд</p>
            <p>Всего карт {trueAnswers + falseAnswers}</p>
            <p>Правильных ответов {trueAnswers} {(trueAnswers * 100) / (trueAnswers + falseAnswers)}%</p>
            <p>Неправильных ответов {falseAnswers}</p>
            <NavLink to={MODULE_ROUTE} onClick={() => closeHandle()}>далее</NavLink>
        </Modal>
    );
};

export default GetResult;