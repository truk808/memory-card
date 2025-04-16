import React, { useEffect, useState } from 'react';
import styles from './schulteTableGame.module.css';

function SchulteTableGame({ difficult }) {
    const size = difficult === '3' ? 10 : difficult === '2' ? 7 : 5;
    const totalNumbers = size * size;
    const [numbers, setNumbers] = useState([]);
    const [timer, setTimer] = useState(10); // 5 минут
    const [isMemorizing, setIsMemorizing] = useState(true);

    useEffect(() => {
        const shuffled = shuffleArray(Array.from({ length: totalNumbers }, (_, i) => i + 1));
        setNumbers(shuffled);
    }, [totalNumbers]);

    useEffect(() => {
        if (isMemorizing && timer > 0) {
            const interval = setInterval(() => setTimer((t) => t - 1), 1000);
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
                        className={styles.cell}
                    >
                        {isMemorizing ? num : '?'}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SchulteTableGame;
