import React from 'react';
import ModuleCardItem from "../moduleCardItem/ModuleCardItem";
import {observer} from "mobx-react-lite";

const ModuleCardList = observer( ({ module, cards }) => {
    return (
        <div>
            {cards.map((card) => (
                <ModuleCardItem key={card.id} card={card} module={module} />
            ))}
        </div>
    );
});

export default ModuleCardList;
