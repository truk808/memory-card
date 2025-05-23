import React from 'react';
import '../style/workout.css'
import GameCard from "../components/gameCard/GameCard";
import iconCard from "../img/icon/icon-card.svg";
import iconPosl from "../img/icon/free-icon-font-priority-arrow-13727280.svg";
import iconTable from "../img/icon/free-icon-font-table-list-10742287.svg";

const games = [
    {
        name: 'match-pairs',
        icon: iconCard,
        title: 'Найди пару',
        description: 'Улучшения способности сопоставлять и запоминать взаимосвязанные объекты.',
        tags: ['память', 'фокус', 'зрительная память'],
    },
    {
        name: 'memory-sequence',
        icon: iconPosl,
        title: 'Повтори последовательность',
        description: 'Улучшения способности удерживать и воспроизводить порядок объектов или действий.',
        tags: ['рабочая память', 'внимание'],
    },
    {
        name: 'remember-words',
        icon: iconTable,
        title: 'Таблица Шульте',
        description: ' таблицы очень эффективны для развития зрительной памяти, а также навыков скорочтения.',
        tags: ['вербальная память', 'концентрация'],
    }
]

const Workout = () => {
    return (
        <div className='page'>
            <div className='page-wrapper'>
                <div className='title'>
                    <div className='h1-title-text'>
                        Тренировка
                    </div>
                    <div>

                    </div>
                </div>
                <div className='workout-game-list'>
                    {
                        games.map(game => (
                            <GameCard
                                name={game.name}
                                description={game.description}
                                image={game.image}
                                title={game.title}
                                tags={game.tags}
                                icon={game.icon}
                                key={game.name}/>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Workout;