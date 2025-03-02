import React from 'react';
import ModuleCardItem from "../moduleCardItem/ModuleCardItem";

const ModuleCardList = ({ module, cards }) => {
    return (
        <div>
            {cards.map((card) => (
                <ModuleCardItem key={card.id} card={card} module={module} />
            ))}
        </div>
    );
};

export default ModuleCardList;
