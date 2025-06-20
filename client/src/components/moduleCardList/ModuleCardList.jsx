import React, {useCallback, useEffect, useMemo} from 'react';
import ModuleCardItem from "../moduleCardItem/ModuleCardItem";
import {observer} from "mobx-react-lite";

const ModuleCardList = observer( ({ module, cards }) => {

    useEffect(() => {

        module.cards.forEach(card => {
            console.log(card.id);
        })
        console.log("вуц")
        module.sortCardBuId()

        module.cards.forEach(card => {
            console.log(card.id);
        })
    }, [module.cards]);

    return (
        <div>
            {module.cards.map((card) => (
                <>
                    {card.id}
                    <ModuleCardItem key={card.id} card={card} module={module} />

                </>
            ))}
        </div>
    );
});

export default ModuleCardList;
