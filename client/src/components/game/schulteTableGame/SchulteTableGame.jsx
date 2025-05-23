import React, { useEffect, useState } from 'react';
import styles from './schulteTableGame.module.css';

function SchulteTableGame({ difficult }) {
    const size = difficult === '3' ? 10 : difficult === '2' ? 7 : 5;
    const totalNumbers = size * size;
    const [numbers, setNumbers] = useState([]);
    const [timer, setTimer] = useState(10); // время на запоминание (секунды)
    const [isMemorizing, setIsMemorizing] = useState(true);
    const [userInputs, setUserInputs] = useState(Array(totalNumbers).fill(''));
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const shuffled = shuffleArray(Array.from({ length: totalNumbers }, (_, i) => i + 1));
        setNumbers(shuffled);
        setUserInputs(Array(totalNumbers).fill(''));
        setTimer(10);
        setIsMemorizing(true);
        setIsFinished(false);
    }, [totalNumbers]);

    useEffect(() => {
        if (isMemorizing && timer > 0) {
            const interval = setInterval(() => setTimer(t => t - 1), 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            setIsMemorizing(false);
        }
    }, [timer, isMemorizing]);

    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleInputChange = (index, value) => {
        // Разрешаем ввод только цифр и пустую строку
        if (value === '' || /^[0-9]{1,2}$/.test(value)) {
            const newInputs = [...userInputs];
            newInputs[index] = value;
            setUserInputs(newInputs);
        }
    };

    const handleFinish = () => {
        setIsFinished(true);
    };

    return (
        <div className={styles.container}>
            <h2>Таблица Шульте</h2>
            <p>Уровень: {difficult}</p>
            {isMemorizing ? (
                <p>Время на запоминание: {formatTime(timer)}</p>
            ) : (
                <p>Воспроизведите числа по памяти</p>
            )}

            <div
                className={styles.grid}
                style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
            >
                {numbers.map((num, index) => (
                    <div
                        key={index}
                        className={`${styles.cell} ${
                            isFinished
                                ? userInputs[index] === String(num)
                                    ? styles.correct
                                    : styles.incorrect
                                : ''
                        }`}
                    >
                        {isMemorizing ? (
                            num
                        ) : isFinished ? (
                            userInputs[index]
                        ) : (
                            <input
                                type="text"
                                maxLength={2}
                                value={userInputs[index]}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                className={styles.input}
                                disabled={isFinished}
                            />
                        )}
                    </div>
                ))}
            </div>

            {!isMemorizing && !isFinished && (
                <button onClick={handleFinish} className={styles.button}>
                    Готово
                </button>
            )}

            {isFinished && (
                <div style={{ marginTop: '24px' }}>
                    <h3>Правильные ответы:</h3>
                    <div
                        className={styles.grid}
                        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
                    >
                        {numbers.map((num, index) => (
                            <div key={index} className={styles.cell}>
                                {num}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SchulteTableGame;
