import React, { useContext, useState } from 'react';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Repeat from "../components/cardTraining/repeat/Repeat";

const Card = observer(() => {
    const { module } = useContext(Context);

    return (
        <div className='card'>
            <Repeat cards={module.cards} module={module} />
        </div>
    );
});

export default Card;
