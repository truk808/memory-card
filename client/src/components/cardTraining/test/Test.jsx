import React from 'react';
import styles from './test.module.css';
import Input from "../../UI/input/Input";
import {observer} from "mobx-react-lite";
import moduleItem from "../../moduleItem/ModuleItem";

const Test = observer(({module}) => {
    const [text, setText] = React.useState("");

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            if(text === module.activeCard.sideOne){
                module.nextCard()
                setText('')
            } else {
                console.log('не правильно')
            }
        }
    };

    const handleChangeInput = (event) => {
        setText(event.target.value);
    }

    return (
        <div className={styles.test}>
            <h1 className={styles.text}>{module.activeCard.sideTwo}</h1>
            <div>
                <Input
                    placeholder={'Введите первую сторону'}
                    value={text}
                    onChange={handleChangeInput}
                    onKeyPress={handleKeyPress}>
                </Input>
            </div>
        </div>
    );
});

export default Test;