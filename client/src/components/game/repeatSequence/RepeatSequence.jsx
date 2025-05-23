import React, { useState, useEffect, useRef } from 'react';
import styles from './repeatSequence.module.css';

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
    const [status, setStatus] = useState(''); // 'success', 'fail', ''
    const [gameOver, setGameOver] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    // Новые состояния для подсветки плиток по клику
    const [highlightIndex, setHighlightIndex] = useState(null);
    const [highlightColor, setHighlightColor] = useState(null); // 'success' или 'fail'

    const timerRef = useRef(null);

    const gridSize = difficult === '1' ? 2 : difficult === '2' ? 3 : 4;
    const totalTiles = gridSize * gridSize;
    const maxLevel = 10; // Максимальный уровень для победы

    useEffect(() => {
        const values = shuffleArray(initialValues).slice(0, totalTiles);
        setGridItems(values);
        startNewLevel(values, 1);
        setGameOver(false);
        setStatus('');
        setLevel(1);
        setTimeElapsed(0);

        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeElapsed(t => t + 1);
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [difficult]);

    useEffect(() => {
        if (status === 'fail' || level > maxLevel) {
            setGameOver(true);
            clearInterval(timerRef.current);
        }
    }, [status, level]);

    const startNewLevel = (items, levelNum) => {
        const newSequence = Array.from({ length: levelNum }, () =>
            Math.floor(Math.random() * items.length)
        );
        setSequence(newSequence);
        setPlayerInput([]);
        setStatus('');
        setIsShowingSequence(true);

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
        if (isShowingSequence || status || gameOver) return;
        const newInput = [...playerInput, index];
        setPlayerInput(newInput);

        const isCorrect = sequence[newInput.length - 1] === index;

        // Подсвечиваем плитку зелёным или красным
        setHighlightIndex(index);
        setHighlightColor(isCorrect ? 'success' : 'fail');

        setTimeout(() => {
            setHighlightIndex(null);
            setHighlightColor(null);
        }, 500);

        if (!isCorrect) {
            setStatus('fail');
            return;
        }

        if (newInput.length === sequence.length) {
            if (level === maxLevel) {
                setStatus('success');
                setGameOver(true);
                clearInterval(timerRef.current);
                return;
            }
            setStatus('success');
            setTimeout(() => {
                setLevel((prev) => prev + 1);
                startNewLevel(gridItems, level + 1);
            }, 1000);
        }
    };

    const resetGame = () => {
        const values = shuffleArray(initialValues).slice(0, totalTiles);
        setGridItems(values);
        startNewLevel(values, 1);
        setGameOver(false);
        setStatus('');
        setLevel(1);
        setTimeElapsed(0);

        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeElapsed(t => t + 1);
        }, 1000);
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className={styles.container}>
            <h2>Повтори последовательность</h2>
            <p>Уровень: {level}</p>
            <p className={`${styles.status} ${styles[status]}`}>
                {status === 'fail' ? 'Ошибка!' : status === 'success' && !gameOver ? 'Успех!' : ''}
            </p>

            {gameOver ? (
                <div className={styles.resultOverlay}>
                    <div className={styles.resultBox}>
                        {status === 'fail' && <h3>Вы проиграли!</h3>}
                        {status === 'success' && level > maxLevel && <h3>Поздравляем! Вы выиграли!</h3>}
                        <p>Достигнут уровень: {level > maxLevel ? maxLevel : level}</p>
                        <p>Время: {formatTime(timeElapsed)}</p>
                        <button onClick={resetGame}>Начать заново</button>
                    </div>
                </div>
            ) : (
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
                            } ${
                                highlightIndex === index && highlightColor === 'success'
                                    ? styles.successHighlight
                                    : ''
                            } ${
                                highlightIndex === index && highlightColor === 'fail'
                                    ? styles.failHighlight
                                    : ''
                            }`}
                            onClick={() => handleClick(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RepeatSequenceGame;
