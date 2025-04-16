import React, { useState, useEffect } from 'react';
import styles from './repeatSequence.module.css'

const initialValues = ['🍎', '🍌', '🍇', '🍓', '🍍', '🍉', '🍏', '🍒', '🥝', '🍋', '🥥', '🍊'];

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function RepeatSequenceGame({ difficult }) {
    const [gridItems, setGridItems] = useState([]);
    const [sequence, setSequence] = useState([]);
    const [playerInput, setPlayerInput] = useState([]);
    const [flashingIndex, setFlashingIndex] = useState(null);
    const [isShowingSequence, setIsShowingSequence] = useState(false);
    const [level, setLevel] = useState(1);
    const [status, setStatus] = useState(''); // 'success', 'fail', 'playing'

    const gridSize = difficult === '1' ? 2 : difficult === '2' ? 3 : 4;
    const totalTiles = gridSize * gridSize;

    useEffect(() => {
        const values = shuffleArray(initialValues).slice(0, totalTiles);
        setGridItems(values);
        startNewLevel(values, 1);
    }, [difficult]);

    const startNewLevel = (items, levelNum) => {
        const newSequence = Array.from({ length: levelNum }, () =>
            Math.floor(Math.random() * items.length)
        );
        setSequence(newSequence);
        setPlayerInput([]);
        setStatus('');
        setIsShowingSequence(true);

        // Визуальное проигрывание
        let i = 0;
        const interval = setInterval(() => {
            setFlashingIndex(newSequence[i]);
            setTimeout(() => setFlashingIndex(null), 400);
            i++;
            if (i >= newSequence.length) {
                clearInterval(interval);
                setTimeout(() => setIsShowingSequence(false), 500);
            }
        }, 800);
    };

    const handleClick = (index) => {
        if (isShowingSequence || status) return;
        const newInput = [...playerInput, index];
        setPlayerInput(newInput);

        const isCorrect = sequence[newInput.length - 1] === index;
        if (!isCorrect) {
            setStatus('fail');
            return;
        }

        if (newInput.length === sequence.length) {
            setStatus('success');
            setTimeout(() => {
                setLevel((prev) => prev + 1);
                startNewLevel(gridItems, level + 1);
            }, 1000);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Повтори последовательность</h2>
            <p>Уровень: {level}</p>
            <p className={styles.status + ' ' + styles[status]}>{status === 'fail' ? 'Ошибка!' : status === 'success' ? 'Успех!' : ''}</p>
            <div
                className={styles.grid}
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, 70px)`,
                }}
            >
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.tile} ${
                            flashingIndex === index ? styles.flash : ''
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RepeatSequenceGame;
