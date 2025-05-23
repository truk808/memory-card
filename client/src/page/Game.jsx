import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {ABOUT_ROUTE} from "../utils/consts";
import MatchPairs from "../components/game/matchPairs/MatchPairs";
import RepeatSequenceGame from "../components/game/repeatSequence/RepeatSequence";
import SchulteTableGame from "../components/game/schulteTableGame/SchulteTableGame";

const Game = () => {
    const nameGame = useLocation().pathname.split("/");

    switch(nameGame[2]) {
        case 'match-pairs':
            return <MatchPairs difficult={nameGame[3]}/>;
        case 'memory-sequence':
            return <RepeatSequenceGame difficult={nameGame[3]}/>;
        case 'remember-words':
            return <SchulteTableGame difficult={nameGame[3]}/>;
        default:
            return <div>Игра не найдена</div>;
    }
};

export default Game;