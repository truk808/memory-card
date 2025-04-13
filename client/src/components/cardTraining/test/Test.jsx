import React, {useEffect} from 'react';
import styles from './test.module.css';
import Input from "../../UI/input/Input";
import {observer} from "mobx-react-lite";
import moduleItem from "../../moduleItem/ModuleItem";

const Test = observer(({cards}) => {
    const [text, setText] = React.useState("");

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if(text === cards.activeCard.side_one){
                cards.nextCard()
                setText('')
                cards.addTrueAnswers(cards.activeCard);
            } else {
                console.log('не правильно')
            }
        }
    };

    const handleChangeInput = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        cards.setDate(Date.now());
    }, [])

    return (
        <div className={styles.center}>
            <div className={styles.test}>
                <h1 className={styles.text}>{cards.activeCard.side_two}</h1>
                <div className={styles.container}>
                    <Input
                        placeholder={'Введите первую сторону'}
                        value={text}
                        onChange={handleChangeInput}
                        onKeyPress={handleKeyPress}>
                        className={"change"}
                    </Input>
                </div>
            </div>
        </div>

    );
});

export default Test;