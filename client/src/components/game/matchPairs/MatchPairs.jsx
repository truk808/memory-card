import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        let arr = initialValues
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
    }, []);

    const handleFlip = (card) => {
        if (
            flipped.length === 2 ||
            flipped.some((f) => f.id === card.id) ||
            matched.includes(card.id)
        ) {
            return;
        }

        const newFlipped = [...flipped, card];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves((m) => m + 1);
            const [first, second] = newFlipped;

            if (first.value === second.value) {
                setMatched([...matched, first.id, second.id]);
                setTimeout(() => setFlipped([]), 500);
            } else {
                setTimeout(() => setFlipped([]), 1000);
            }
        }
    };

    return (
        <div className={styles.gameContainer}>
            <h2>Найди пару</h2>
            <p>Ходов: {moves}</p>
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
        </div>
    );
}

export default MatchPairsGame;
