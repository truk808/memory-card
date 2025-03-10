import React, { useContext, useState } from 'react';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Repeat from "../components/cardTraining/repeat/Repeat";
import Memorization from "../components/cardTraining/memorization/Memorization"

const Card = observer(() => {
    const { module } = useContext(Context);
    const cards = [...module.cards].sort(() => Math.random() - 0.5)
    module.setLearningCard(cards);
    module.setActiveCard(cards[0]);

    return (
        <div className='card'>
            {/*<Repeat cards={module.cards} module={module} />*/}
            <Memorization module={module}/>
        </div>
    );
});

export default Card;
