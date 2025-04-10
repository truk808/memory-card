import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Repeat from "../components/cardTraining/repeat/Repeat";
import {useSearchParams} from "react-router-dom";
import GetResult from "../components/getResult/GetResult";
import Memorization from "../components/cardTraining/memorization/Memorization";
import Test from "../components/cardTraining/test/Test";

const Card = observer(() => {
    const [searchParams] = useSearchParams();
    const nameTraining = searchParams.get("nameTraining");
    const {module} = useContext(Context);
    const {cards} = useContext(Context);
    const [modal, setModal] = React.useState(false);

    useEffect(() => {
        cards.reset()
        cards.setCards(module.cards);
        cards.setActiveCard(cards.cards[0]);
    }, [])

    return (
        <>
            {
                cards.activeCard == null && cards.cards.length === 0 ?
                    <p>карт нет</p>
                    :
                    <>
                        {
                            cards.activeCard == null ?
                                <GetResult
                                    cards={cards}
                                    setActive={setModal}
                                    active={modal} />
                                :
                                <div className='card'>
                                    {nameTraining === "repeat" && <Repeat cards={cards}/>}
                                    {nameTraining === "memorization" && <Memorization cards={cards}/>}
                                    {nameTraining === "test" &&  <Test cards={cards}/>}
                                </div>
                        }
                    </>
            }
        </>
    );
});

export default Card;
