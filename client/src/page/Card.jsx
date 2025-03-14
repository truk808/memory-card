import React, { useContext, useState } from 'react';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Repeat from "../components/cardTraining/repeat/Repeat";
import Memorization from "../components/cardTraining/memorization/Memorization"
import Test from "../components/cardTraining/test/Test";
import { useSearchParams } from "react-router-dom";

const Card = observer(() => {
    const [searchParams] = useSearchParams();
    const nameTraining = searchParams.get("nameTraining");
    const { module } = useContext(Context);
    const cards = [...module.cards].sort(() => Math.random() - 0.5)
    module.setLearningCard(cards);
    module.setActiveCard(cards[0]);


    return (
        <div className='card'>
            {nameTraining === "repeat" && <Repeat module={module}/>}
            {nameTraining === "memorization" && <Memorization module={module}/>}
            {nameTraining === "test" &&  <Test module={module}/>}
        </div>
    );
});

export default Card;
