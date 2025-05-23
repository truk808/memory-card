import React, { useState, useEffect, useRef } from 'react';
import styles from './MatchPairsGame.module.css';

const initialValues = ['🍎', '🍌', '🍇', '🍓', '🍍', '🍉',
    '🍏', '🍒',
    '🥝', '🍋', '🥥', '🍊'];

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function MatchPairsGame({difficult}) {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        let arr = initialValues;
        switch (difficult) {
            case '1':
                arr = initialValues.slice(0, 6);
                break;
            case '2':
                arr = initialValues.slice(0, 8);
                break;
            case '3':
                arr = initialValues;
                break;
        }

        const shuffled = shuffleArray([...arr, ...arr]).map((value, index) => ({
            id: index,
            value,
        }));
        setCards(shuffled);
        setMatched([]);
        setFlipped([]);
        setMoves(0);
        setGameOver(false);
        setTimeElapsed(0);

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setTimeElapsed(t => t + 1);
        }, 1000);

        // Очистка таймера при размонтировании
        return () => clearInterval(timerRef.current);
    }, [difficult]);

    useEffect(() => {
        if (cards.length > 0 && matched.length === cards.length) {
            setGameOver(true);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    }, [matched, cards]);

    const handleFlip = (card) => {
        if (
            flipped.length === 2 ||
            flipped.some((f) => f.id === card.id) ||
            matched.includes(card.id) ||
            gameOver
        ) {
            return;
        }

        const newFlipped = [...flipped, card];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves((m) => m + 1);
            const [first, second] = newFlipped;

            if (first.value === second.value) {
                setMatched((prev) => [...prev, first.id, second.id]);
                setTimeout(() => setFlipped([]), 500);
            } else {
                setTimeout(() => setFlipped([]), 1000);
            }
        }
    };

    const resetGame = () => {
        let arr = initialValues;
        switch (difficult) {
            case '1':
                arr = initialValues.slice(0, 6);
                break;
            case '2':
                arr = initialValues.slice(0, 8);
                break;
            case '3':
                arr = initialValues;
                break;
        }

        const shuffled = shuffleArray([...arr, ...arr]).map((value, index) => ({
            id: index,
            value,
        }));
        setCards(shuffled);
        setMatched([]);
        setFlipped([]);
        setMoves(0);
        setGameOver(false);
        setTimeElapsed(0);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setTimeElapsed(t => t + 1);
        }, 1000);
    };

    // Форматирование времени в мм:сс
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className={styles.gameContainer}>
            <h2>Найди пару</h2>
            <p>Ходов: {moves}</p>

            {gameOver ? (
                <div className={styles.resultOverlay}>
                    <div className={styles.resultBox}>
                        <h3>Поздравляем! Игра завершена.</h3>
                        <p>Вы нашли все пары за {moves} ходов.</p>
                        <p>Время: {formatTime(timeElapsed)}</p>
                        <button onClick={resetGame}>Играть заново</button>
                    </div>
                </div>
            ) : (
                <div className={styles.grid}>
                    {cards.map((card) => {
                        const isFlipped =
                            flipped.some((f) => f.id === card.id) || matched.includes(card.id);

                        return (
                            <div
                                key={card.id}
                                className={`${styles.card} ${!isFlipped ? styles.flipped : ''}`}
                                onClick={() => handleFlip(card)}
                            >
                                <div className={styles.inner}>
                                    <div className={styles.front}>{card.value}</div>
                                    <div className={styles.back}>❓</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default MatchPairsGame;
